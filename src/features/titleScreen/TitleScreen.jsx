import structuralStyles from "./TitleScreen.module.css";
import useTitleScreen from "./useTitleScreen";
import MenuItem from "../../core-base/MenuItem";
import classNames from "classnames";
import personalizedStyles from "../../personalized.module.css";

const Welcome = () => {
  const { newGame, continueGame, showLoadGame, showSettings } =
    useTitleScreen();
  const items = [
    { label: "New Game", action: newGame },
    { label: "Continue", action: continueGame },
    { label: "Load Game", action: showLoadGame },
    { label: "Settings", action: showSettings },
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

export default Welcome;
