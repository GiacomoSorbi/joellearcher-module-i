import React from "react";

const Input = ({ label, type = "text", ...props }) => (
  <>
    {label && <label htmlFor={id}>{label}</label>}
    <input type={type} {...props} />
  </>
);
export default Input;
