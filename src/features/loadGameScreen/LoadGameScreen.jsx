import React from "react";
import structuralStyles from "./LoadGameScreen.module.css";

import MenuItem from "../../core-base/MenuItem";
import { Text } from "../../core-base/Text";

import useLoadGame from "./useLoadGame";
import MenuTemplate from "../../core-base/core-ui/MenuCore";
import { useSelector } from "react-redux";
import { selectManualSaves } from "../../core-base/saveManager/saveManagerSlice";

const ItemContent = ({ saveSlot, time }) => (
  <>
    <Text dimmed={saveSlot === "Empty"} type="ui" as="h4">
      {saveSlot}
    </Text>

    <Text type="ui" as="h5">
      {time}
    </Text>
  </>
);

const LoadGameScreen = () => {
  const { toggleMenu, loadGame } = useLoadGame();
  const manualSaves = useSelector(selectManualSaves);

  const savedGames = [
    ...manualSaves.map((save) => ({
      saveSlot: save.saveSlot,
      label: (
        <ItemContent saveSlot={`Slot ${save.saveSlot}`} time={save.text} />
      ),
      action: () => loadGame(save),
    })),
  ];

  return (
    <MenuTemplate
      title="Load Game"
      subtitle="Select a save to load"
      active="loadGame"
      toggleMenu={toggleMenu}
    >
      <ul className={structuralStyles.list}>
        {savedGames.map((item) => (
          <MenuItem
            extraClass={[structuralStyles.itemMenu]}
            key={item.saveSlot}
            action={item.action}
            label={item.label}
          />
        ))}
      </ul>
    </MenuTemplate>
  );
};

export default LoadGameScreen;
