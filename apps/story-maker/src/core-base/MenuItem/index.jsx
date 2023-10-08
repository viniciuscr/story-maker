import classNames from "classnames";
import styles from "./MenuItem.module.css";
import personalizedStyles from "../../personalized.module.css";

const MenuItem = ({ label, action, className }) => {
  return (
    <li
      className={classNames(
        styles.item,
        className,
        personalizedStyles.itemMenu
      )}
      onClick={() => action()}
    >
      {label}
    </li>
  );
};
export default MenuItem;
