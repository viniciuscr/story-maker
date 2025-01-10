import React from "react";
import structuralStyles from "./SaveGameScreen.module.css";

import MenuItem from "../../core-base/MenuItem";
import { Text } from "../../core-base/Text";

import useSaveGame from "./useSaveGame";
import MenuTemplate from "../../core-base/core-ui/MenuCore";
import useSaveManer from "../../core-base/saveManager/useSaveManager";
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

const SaveGameScreen = () => {
  const { toggleMenu } = useSaveGame();
  const { saveOverride } = useSaveManer();
  const manualSaves = useSelector(selectManualSaves);

  const savedGames = manualSaves.map((save) => ({
    saveSlot: save.saveSlot,
    label: <ItemContent saveSlot={`Slot ${save.saveSlot}`} time={save.text} />,
    action: () => saveOverride(save.saveSlot),
  }));

  return (
    <MenuTemplate
      title="Save Game"
      subtitle="Select a slot to save"
      active="saveGame"
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

ItemContent.propTypes = {
  saveSlot: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default SaveGameScreen;
