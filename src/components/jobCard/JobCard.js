import React from "react";
import { useParams } from "react-router-dom";
import classes from "./JobCard.module.css";
import data from "../../data.json";
import { ButtonComponent } from "../ui/buttonComponent/ButtonComponent";

export default function JobCard() {
  const { id } = useParams();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <div className={classes.headerText}>
            <div className={classes.details}>
              {data[id - 1].postedAt}
              <div className={classes.dot}></div>
              {data[id - 1].contract}
            </div>
            <h2>{data[id - 1].position}</h2>
            <p className={classes.location}>{data[id - 1].location}</p>
          </div>
          <ButtonComponent
            onClick={() => {
              window.open(data[id - 1].apply, "_blank").focus();
            }}
            isViolet={true}
          >
            Apply Now
          </ButtonComponent>
        </div>

        <p className={classes.grayText}>{data[id - 1].description}</p>
        <h2>Requirements</h2>
        <p className={classes.grayText}>{data[id - 1].requirements.content}</p>
        <ul>
          {data[id - 1].requirements.items.map((item, i) => (
            <li key={i}>
              <span className={[classes.item, classes.grayText].join(" ")}>
                {item}
              </span>
            </li>
          ))}
        </ul>

        <h2>What Will You Do</h2>
        <p className={classes.grayText}>{data[id - 1].role.content}</p>
        <ol>
          {data[id - 1].role.items.map((item, i) => (
            <li key={i}>
              <span className={[classes.item, classes.grayText].join(" ")}>
                {item}
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className={classes.footer}>
        <div className={classes.footerDetails}>
          <h2>{data[id - 1].position}</h2>
          <p className={classes.grayText}>{data[id - 1].company}</p>
        </div>
        <ButtonComponent
          onClick={() => {
            window.open(data[id - 1].apply, "_blank").focus();
          }}
          isViolet={true}
        >
          Apply Now
        </ButtonComponent>
      </div>
    </>
  );
}
