import React from "react";
import classes from "./HeaderCard.module.css";

export const HeaderCard = ({ children }) => {
  return <div className={classes.cardContainer}>{children}</div>;
};
