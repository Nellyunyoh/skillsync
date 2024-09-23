// import React from "react";
import "./style.css";

function Button({ label, onClick, variant }) {
  if (variant === "primary") {
    return (
      <button className={"primary-button"} onClick={onClick}>
        {label}
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button className={"secondary-button"} onClick={onClick}>
        {label}
      </button>
    );
  }

  return (
    <button className={"primary-button"} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
