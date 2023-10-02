import Scene from "./features/scene/Scene";
import "./App.css";
import TitleScreen from "./features/titleScreen/TitleScreen";
import { useSelector } from "react-redux";
import { selectIsShowing } from "./features/titleScreen/titleScreenSlice";

function App() {
  const showTitleScreen = useSelector(selectIsShowing);

  return (
    <div className="App">{showTitleScreen ? <TitleScreen /> : <Scene />}</div>
  );
}

export default App;
