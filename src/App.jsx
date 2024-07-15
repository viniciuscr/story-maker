import Scene from "./features/scene/Scene";
import "./App.css";
import TitleScreen from "./features/titleScreen/TitleScreen";
import LoadGameScreen from "./features/loadGameScreen/LoadGameScreen";
import SettingsScreen from "./features/settings/SettingsScreen";
import { useSelector } from "react-redux";
import { selectIsShowingTitleScreen } from "./features/titleScreen/titleScreenSlice";
import { selectIsShowingSettingsScreen } from "./features/settings/settingsSlice";
import { selectIsShowingLoadGame } from "./features/loadGameScreen/loadGameSlice";
import SaveGameScreen from "./features/saveGameScreen/SaveGameScreen";
import { selectIsShowingSaveGame } from "./features/saveGameScreen/saveGameSlice";

function App() {
  const showTitleScreen = useSelector(selectIsShowingTitleScreen);
  const showLoadGameScreen = useSelector(selectIsShowingLoadGame);
  const showSaveGameScreen = useSelector(selectIsShowingSaveGame);
  const showSettingsScreen = useSelector(selectIsShowingSettingsScreen);

  return (
    <div className="App">
      {showSaveGameScreen && <SaveGameScreen />}
      {showLoadGameScreen && <LoadGameScreen />}
      {showSettingsScreen && <SettingsScreen />}
      {showTitleScreen ? <TitleScreen /> : <Scene />}
    </div>
  );
}

export default App;
