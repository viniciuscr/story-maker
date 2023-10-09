import { useDispatch } from "react-redux";
import { goToScene } from "../scene/sceneSlice";
import { hide, newSave } from "./SettingsSlice";
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

  const saveGame = (manualSave) => {
    dispatch(newSave(manualSave));
  };

  const loadGame = () => {};

  return { newGame, continueGame, saveGame, loadGame };
};

export default useSettings;
