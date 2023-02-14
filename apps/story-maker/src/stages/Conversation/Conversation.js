import React from "react";
import TextBox from "../../features/textBox/TextBox";
import structuralStyles from "./Conversation.module.css";
import { selectScenery, selectOnStage } from "../../features/scene/sceneSlice";
import {  useSelector } from "react-redux";
import OnSpot from "./OnSpot";

const Conversation = () => {
  const scenery = useSelector(selectScenery);
  const onStage = useSelector(selectOnStage);

  return (
    <div
      style={{
        backgroundImage: `url(${scenery})`,
      }}
      className={structuralStyles.scenario}
    >
     <OnSpot actors={onStage} />
      <div className={structuralStyles.scene}>
        <TextBox translucent />
      </div>
    </div>
  );
};

export default Conversation;
