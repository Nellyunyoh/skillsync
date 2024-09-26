// import React from "react";
import "./style.css";

function Button({ label, onClick, variant }) {
  const BUTTON = {
    primary: "primary-button",
    secondary: "secondary-button",
    danger: "danger-button",
    default: "default-button",
  };

  return (
    <button className={BUTTON[variant]} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
