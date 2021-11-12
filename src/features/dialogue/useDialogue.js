import { useDispatch, useSelector } from "react-redux";
import { goToScene } from "../scene/sceneSlice";
import {
  goToDialogue,
  nextDialogue,
  selectCurrentDialogue,
} from "./dialogueSlice";
import useStatus from "../status/useStatus";

const useDialogue = () => {
  const dispatch = useDispatch();
  const [_, setStatus] = useStatus();
  const dialogue = useSelector(selectCurrentDialogue) ?? {};

  const nextInteraction = (next) =>
    next.scene ? dispatch(goToScene(next.scene)) : dispatch(nextDialogue());

  const choose = ({ next, triggers }) => {
    if (triggers) {
      triggers.forEach(({ effect, value }) => {
        if (effect === "update_status") {
          setStatus(value.value, value.path);
        }
      });
    }

    next.scene
      ? dispatch(goToScene(next.scene))
      : dispatch(goToDialogue(next.dialogue));
  };

  return [dialogue, choose, nextInteraction];
};

export default useDialogue;
