import React from "react";
import PropTypes from "prop-types";
import "./input.css";

// Primary UI component for user interaction

export const Input = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? "input--primary" : "input--secondary";
  return (
    <>
      <label for="myInput">{label}</label>
      <i
        type={type}
        name="myInput"
        className={["input", `input--${size}`, mode].join(" ")}
        style={backgroundColor && { backgroundColor }}
        {...props}
      />
    </>
  );
};

Input.propTypes = {
  primary: PropTypes.bool, // Is this the principal call to action on the page?
  backgroundColor: PropTypes.string, // What background color to use
  size: PropTypes.oneOf(["small", "medium", "large"]), // Input text size
  onInput: PropTypes.func, // Click handler
  type: PropTypes.oneOf(["text", "date", "email", "password", "tel", "url"]), // What type of Input
};

Input.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "small",
  onInput: undefined,
  type: "text",
};
