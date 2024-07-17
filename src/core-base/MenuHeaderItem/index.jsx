import classNames from "classnames";
import styles from "./MenuItem.module.css";
import personalizedStyles from "../../personalized.module.css";

const MenuHeaderItem = ({ label, action, extraClass, active }) => {
  return (
    <li
      className={classNames(
        active ? styles.itemActive : "",
        styles.item,
        personalizedStyles.itemMenuHeader,
        personalizedStyles.defaultClickEffect,
        extraClass
      )}
      onClick={() => action()}
    >
      {label}
    </li>
  );
};
export default MenuHeaderItem;
