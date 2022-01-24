import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import { ButtonComponent } from "../ui/buttonComponent/ButtonComponent";
import { LogoComponent } from "../ui/logoComponent/LogoComponent";
import classes from "./JobHeader.module.css";

export default function JobHeader() {
  const { id } = useParams();
  const { logoBackground, company, logo, website } = data[id - 1];
  // console.table(data[id - 1]);
  return (
    <div className={classes.container}>
      <LogoComponent
        className={classes.logo}
        logo={logo}
        logoBackground={logoBackground}
      />
      <div className={classes.companyContainer}>
        <h2>{company}</h2>
        <p>{company.toLowerCase() + ".com"}</p>
      </div>
      <ButtonComponent
        isViolet={false}
        onClick={() => {
          window.open(website, "_blank").focus();
        }}
      >
        <p>Company Site</p>
      </ButtonComponent>
    </div>
  );
}
