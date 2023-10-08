import classNames from "classnames";

//TODO: as soon as bun manage to handle css module, migrate it
const style = {
  cursor: "pointer",
  listStyleType: "none",
  padding: "10px",
  margin: "5px"
}

/**
 * Represents a menu item.
 * @param {string} label - The label of the menu item.
 * @param {function} action - The action to be performed when the menu item is clicked.
 * @param {string} extraClass - Extra classname for the menu item.
 * @returns {JSX.Element} The rendered menu item.
 */
const MenuItem = ({ label, action, extraClass }: { label: string, action: () => void, extraClass?: string }): JSX.Element => {
  return (
    <li className={classNames( extraClass)} style={style} onClick={action}>
      {label}
    </li>
  );
}
export default MenuItem;