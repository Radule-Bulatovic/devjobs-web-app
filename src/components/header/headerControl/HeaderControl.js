import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../../context/theme-context";
import classes from "./HeaderControl.module.css";

export const HeaderControl = () => {
  const { setIsDark } = useContext(ThemeContext);
  return (
    <div className={classes.innerContainer}>
      <Link to="/" className={classes.text}>
        devjobs
      </Link>
      <label className={classes.switch}>
        <input
          onChange={() => {
            setIsDark((prev) => !prev);
          }}
          type="checkbox"
        />
        <span className={classes.slider}></span>
      </label>
    </div>
  );
};
