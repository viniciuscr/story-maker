import React from "react";
import { useSelector } from "react-redux";
import { selectStage } from "./sceneSlice";
import FullScene from "../../stages/FullScene/FullScene";

export default function Scene() {
  const stage = useSelector(selectStage);

  const stages = {
    FullScene: () => <FullScene />,
  };
  return stage ? stages[stage]() : null;
}
