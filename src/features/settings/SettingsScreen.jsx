import React from "react";
import structuralStyles from "./Settings.module.css";
import useSettings from "./useSettings";
import MenuItem from "../../core-base/MenuItem";
import classNames from "classnames";
import personalizedStyles from "../../personalized.module.css";

const SettingsScreen = () => {
  const { newGame, continueGame } = useSettings();
  const items = [
    { label: "Title Screen", action: newGame },
    { label: "Save Game", action: continueGame },
    { label: "Load Game", action: continueGame },
    { label: "Settings" },
    { label: "Exit" },
  ];

  return (
    <div
      className={classNames(
        structuralStyles.container,
        personalizedStyles.escapeMenu
      )}
    >
      <ul className={structuralStyles.list}>
        {items.map((item) => (
          <MenuItem
            extraClass={[
              personalizedStyles.listItem,
              personalizedStyles.itemMenu,
            ]}
            key={item}
            action={item.action}
            label={item.label}
          />
        ))}
      </ul>
    </div>
  );
};

export default SettingsScreen;
