import React from "react";
import structuralStyles from "./Settings.module.css";
import useSettings from "./useSettings";
import MenuItem from "../../core-base/MenuItem";
import classNames from "classnames";
import personalizedStyles from "../../personalized.module.css";

const SettingsMenu = () => {
  const { newGame, continueGame } = useSettings();
  const items = [
    { label: "New Game", action: newGame },
    { label: "Continue", action: continueGame },
    { label: "Settings" },
    { label: "Exit" },
  ];

  return (
    <div className={classNames(structuralStyles.container, personalizedStyles.escapeMenu)}>
    
        <ul className={structuralStyles.list}>
          {items.map((item) => (
            <MenuItem className={personalizedStyles.item}
              key={item}
              action={item.action}
              label={item.label}
            />
              
          ))}
        </ul>
      </div>
    
  );
};

export default SettingsMenu;
