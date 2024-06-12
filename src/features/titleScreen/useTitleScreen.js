import { useDispatch } from "react-redux";
import { goToScene } from "../scene/sceneSlice";
import { hide } from "./titleScreenSlice";
import { startNewGame } from "../../app/extraReducers";
import { show as showSettingsScreen } from "../settings/settingsSlice";
import { show as showLoadGameScreen } from "../loadGameScreen/loadGameSlice";

const useTitleScreen = () => {
  const dispatch = useDispatch();

  const newGame = () => {
    dispatch(hide());
    dispatch(startNewGame());
    dispatch(goToScene("intro"));
  };
  const continueGame = () => {
    dispatch(hide());
  };
  const showLoadGame = () => {
    dispatch(showLoadGameScreen());
  };
  const showSettings = () => {
    dispatch(showSettingsScreen());
  };

  return { newGame, continueGame, showLoadGame, showSettings };
};

export default useTitleScreen;
