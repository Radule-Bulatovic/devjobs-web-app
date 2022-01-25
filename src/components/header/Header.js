import React from "react";
import classes from "./Header.module.css";
import desktop from "../../assets/desktop/bg-pattern-header.svg";
import tablet from "../../assets/tablet/bg-pattern-header.svg";
import mobile from "../../assets/mobile/bg-pattern-header.svg";
import { HeaderControl } from "./headerControl/HeaderControl";

export const Header = () => {
  return (
    <React.Fragment>
      <img
        alt="desktop background"
        src={desktop}
        className={classes.desktopImg}
      />
      <img alt="tablet background" src={tablet} className={classes.tabletImg} />
      <img alt="mobile background" src={mobile} className={classes.mobileImg} />
      <HeaderControl></HeaderControl>
    </React.Fragment>
  );
};
