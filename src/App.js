import React from "react";
import Scene from "./features/scene/Scene";
import "./App.css";
import { useDispatch } from "react-redux";
import { goToScene } from "./features/scene/sceneSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(goToScene("intro"));

  return (
    <div className="App">
      <Scene />
    </div>
  );
}

export default App;
