import React from "react";
import { Link } from "react-router-dom";
import classes from "./Schedule.module.css";

const ScheduleContent = () => {
  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <p>SCHEDULE</p>
      </div>
      <div className={classes.tableContainer}>
        <div className={classes.tableContent}>
          <p>PNC Championship</p>
          <p>The Ritz-Carlton Golf Club Orlando</p>
          <p>Dec. 17 - 19, 2021</p>
        </div>
        <div className={classes.tableContent}>
          <p>The Masters(47)</p>
          <p>Augusta National Golf Club </p>
          <p>April 7 - 10, 2022</p>
        </div>
        <div className={classes.tableContent}>
          <p>The Open Championship (MC) </p>
          <p>St. Andrews Links (Old Course) </p>
          <p>July 14 - 17, 2022</p>
        </div>
      </div>
      <Link to="">
        <button className={classes.button}>DOWNLOAD SCHEDULE</button>
      </Link>
    </div>
  );
};

export default ScheduleContent;
