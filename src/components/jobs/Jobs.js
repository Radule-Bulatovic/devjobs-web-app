import React, { useEffect, useState } from "react";
import classes from "./Jobs.module.css";
import data from "../../data.json";
import { Job } from "./job/Job";
import { ButtonComponent } from "../ui/buttonComponent/ButtonComponent";

export const Jobs = ({
  filterData: { search, location = "", time = false },
}) => {
  const [jobNumber, setJobNumber] = useState(9);

  console.log(location);

  let filtered = data.filter((e) => {
    return (
      (e.company.toLowerCase().search(search.toLowerCase()) >= 0 ||
        e.position.toLowerCase().search(search.toLowerCase()) >= 0) &&
      e.location.toLowerCase().search(location.toLowerCase()) >= 0 &&
      (time ? e.contract === "Full Time" : true)
    );
  });

  useEffect(() => {}, [search, location, time]);

  const loadJobNumber = () => {
    setJobNumber((prevState) => {
      return prevState + 3;
    });
  };

  return (
    <>
      <div className={classes.container}>
        {filtered.slice(0, jobNumber).map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </div>

      {jobNumber >= filtered.length ? null : (
        <ButtonComponent onClick={loadJobNumber} isViolet={true}>
          <p className={classes.buttonText}>Load More</p>
        </ButtonComponent>
      )}
    </>
  );
};
