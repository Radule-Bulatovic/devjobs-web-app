import React from "react";
import classes from "./ButtonComponent.module.css";

export const ButtonComponent = ({ onClick, children, isViolet }) => {
  return (
    <button
      className={isViolet ? classes.btnViolet : classes.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
