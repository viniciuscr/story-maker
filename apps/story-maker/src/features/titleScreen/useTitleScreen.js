import { useDispatch } from "react-redux";
import { goToScene } from "../scene/sceneSlice";
import { hide } from "./titleScreenSlice";

const useTitleScreen = () => {
  const dispatch = useDispatch();

  const newGame = () => {
    dispatch(hide());
    dispatch(goToScene("intro"));
  };
  const continueGame = () => {
    dispatch(hide());
  };

  return { newGame, continueGame };
};

export default useTitleScreen;
