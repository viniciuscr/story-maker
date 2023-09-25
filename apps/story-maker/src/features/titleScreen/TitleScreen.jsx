import React from "react";
import styles from "./TitleScreen.module.css";
import useTitleScreen from "./useTitleScreen";

const Welcome = () => {
  const { newGame, continueGame } = useTitleScreen();
  const items = [
    { label: "New Game", action: newGame },
    { label: "Continue", action: continueGame },
    { label: "Settings" },
    { label: "Exit" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
        <ul className={styles.list}>
          {items.map((item) => (
            <li
              key={item}
              className={styles.item}
              onClick={() => item.action()}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Welcome;
