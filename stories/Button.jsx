import React from "react";
import PropTypes from "prop-types";
import "./button.css";

// Primary UI component for user interaction

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool, // Is this the principal call to action on the page?
  backgroundColor: PropTypes.string, // What background color to use
  size: PropTypes.oneOf(["small", "medium", "large"]), // How large should the button be?
  label: PropTypes.string.isRequired, // Button text
  onClick: PropTypes.func, // Click handler
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "small",
  label: "Button",
  onClick: undefined,
};
