import { useDispatch, useSelector } from "react-redux";
import { goToScene } from "../scene/sceneSlice";
import {
  goToDialogue,
  nextDialogue,
  selectCurrentDialogue,
} from "./dialogueSlice";

const useDialogue = () => {
  const dispatch = useDispatch();
  const dialogue = useSelector(selectCurrentDialogue) ?? {};

  const nextInteraction = (next) =>
    next.scene ? dispatch(goToScene(next.scene)) : dispatch(nextDialogue());

  //TODO: desnecessario, o listner vai fazer o update_status
  const choose = ({ next }) => {
    next.scene
      ? dispatch(goToScene(next.scene))
      : dispatch(goToDialogue(next.dialogue));
  };

  return [dialogue, choose, nextInteraction];
};

export default useDialogue;
