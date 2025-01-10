import classNames from "classnames";
import personalizedStyles from "../../../personalized.module.css";
import structuralStyles from "./MenuCore.module.css";
import MenuHeaderItem from "../../MenuHeaderItem";
import { Text } from "../../Text";

import useLoadGameScreen from "../../../features/loadGameScreen/useLoadGame";
import useSaveGameScreen from "../../../features/saveGameScreen/useSaveGame";

const MenuTemplate = ({ children, title, subtitle, toggleMenu, active }) => {

  const { showLoadGameScreen } = useLoadGameScreen();
  const { showSaveGameScreen } = useSaveGameScreen();

  return (
    <div
      className={classNames(
        structuralStyles.container,
        personalizedStyles.escapeMenu
      )}
    >
      <div>
        <ul className={personalizedStyles.menuHeader}>
          <MenuHeaderItem
            active={active === "loadGame"}
            action={() => {
              showLoadGameScreen();
              active !== "loadGame" && toggleMenu();
            }}
            label="Load Game"
          />
          <MenuHeaderItem
            active={active === "saveGame"}
            action={() => {
              showSaveGameScreen();
              active !== "saveGame" && toggleMenu();
            }}
            label="Save Game"
          />
          <MenuHeaderItem action={() => { }} label="Gallery" />
          <MenuHeaderItem action={() => { }} label="Settings" />
        </ul>
      </div>
      <div className={personalizedStyles.menuContent}>
        <div>
          <Text as="h1" type="ui">
            {title}
          </Text>
          <Text as="h2" type="ui">
            {subtitle}
          </Text>
        </div>
        <div>{children}</div>
      </div>
      <div>
        <button
          className={classNames(
            personalizedStyles.defaultClickEffect,
            personalizedStyles.menuCorebutton
          )}
          onClick={() => toggleMenu()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MenuTemplate;
