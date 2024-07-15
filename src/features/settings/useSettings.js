import { useDispatch } from "react-redux";
import { goToScene } from "../scene/sceneSlice";
import { hide } from "./settingsSlice";
import { startNewGame } from "../../app/extraReducers";

const useSettings = () => {
  const dispatch = useDispatch();

  const newGame = () => {
    dispatch(hide());
    dispatch(startNewGame());
    dispatch(goToScene("intro"));
  };
  const continueGame = () => {
    dispatch(hide());
  };

  const saveGame = () => {};

  const loadGame = () => {};

  return { newGame, continueGame, saveGame, loadGame };
};

export default useSettings;
