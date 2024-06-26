import classNames from "classnames";
import personalizedStyles from "../../../personalized.module.css";
import structuralStyles from "./MenuCore.module.css";
import MenuHeaderItem from "../../MenuHeaderItem";
import { Text } from "../../Text";

import { useDispatch } from "react-redux";

const MenuTemplate = ({ children, title, subtitle, toggleMenu, active }) => {
  const dispatch = useDispatch();

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
            action={() => {}}
            label="Load Game"
          />
          <MenuHeaderItem action={() => {}} label="Save Game" />
          <MenuHeaderItem action={() => {}} label="Gallery" />
          <MenuHeaderItem action={() => {}} label="Settings" />
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
          onClick={() => dispatch(toggleMenu)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MenuTemplate;
