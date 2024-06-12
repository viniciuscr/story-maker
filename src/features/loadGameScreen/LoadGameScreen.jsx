import React from "react";
import structuralStyles from "./LoadGameScreen.module.css";

import MenuItem from "../../core-base/MenuItem";
import { Text } from "../../core-base/Text";

import useLoadGame from "./useLoadGame";
import MenuTemplate from "../../core-base/core-ui/MenuCore";

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
  const { toggleMenu } = useLoadGame();

  const savedGames = [
    {
      label: (
        <ItemContent
          saveSlot="Auto Save"
          time={new Date().toLocaleDateString()}
        />
      ),
      action: () => {},
    },
    {
      label: (
        <ItemContent
          saveSlot={"Save 01"}
          time={new Date().toLocaleDateString()}
        />
      ),
      action: () => {},
    },
    ...Array.from({ length: 8 }, (x, i) => ({
      label: <ItemContent saveSlot="Empty" />,
      action: () => {},
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
            key={item}
            action={item.action}
            label={item.label}
          />
        ))}
      </ul>
    </MenuTemplate>
  );
};

export default LoadGameScreen;
