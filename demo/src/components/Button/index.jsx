import React from "react";
import "./Button.css";
const Button = ({
  children,
  disabled,
  onClick = () => null,
  text = "go ahead and click me!"
}) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {children || text}
  </button>
);

export default Button;
