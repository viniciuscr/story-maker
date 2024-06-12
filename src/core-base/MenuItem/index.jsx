import classNames from "classnames";
import styles from "./MenuItem.module.css";
import personalizedStyles from "../../personalized.module.css";

const MenuItem = ({ label, action, extraClass }) => {
  return (
    <li
      className={classNames(
        styles.item,
        personalizedStyles.itemMenu,
        personalizedStyles.defaultClickEffect,
        extraClass
      )}
      onClick={() => action()}
    >
      {label}
    </li>
  );
};
export default MenuItem;
