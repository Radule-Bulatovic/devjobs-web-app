import React from "react";
import classes from "./Job.module.css";
import { LogoComponent } from "../../ui/logoComponent/LogoComponent";
import { useNavigate } from "react-router-dom";

export const Job = ({
  job: {
    id,
    company,
    logoBackground,
    logo,
    postedAt,
    contract,
    position,
    location,
  },
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/job/${id}`);
      }}
      className={classes.container}
    >
      <LogoComponent
        logoBackground={logoBackground}
        logo={logo}
        className={classes.logo}
      ></LogoComponent>
      <div className={classes.details}>
        {postedAt}
        <div className={classes.dot}></div>
        {contract}
      </div>
      <h3>{position}</h3>
      <p className={classes.company}>{company}</p>
      <p className={classes.location}>{location}</p>
    </div>
  );
};
