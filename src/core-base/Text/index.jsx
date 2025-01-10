import classNames from "classnames";
import personalizedStyles from "../../personalized.module.css";
/**
 * Renders a text component with customizable styling.
 *
 * @param {Object} props - The properties for the Text component.
 * @param {ReactNode} props.children - The content to be rendered inside the Text component.
 * @param {("p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span")} [props.as] - The HTML element to render as. Defaults to "p" if not provided.
 * @param {("ui" | "game")} props.type - The type of styling to apply to the Text component.
 * @return {ReactElement} The rendered Text component.
 */
export const Text = ({ children, as, type, dimmed }) => {
  const Component = as || "p";
  return (
    <Component
      className={classNames(personalizedStyles[type], {
        [personalizedStyles["dimmed"]]: dimmed,
      })}
    >
      {children}
    </Component>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  type: PropTypes.string,
  dimmed: PropTypes.bool,
};