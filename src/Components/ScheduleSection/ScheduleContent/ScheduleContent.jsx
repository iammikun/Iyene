import React from "react";
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
      <a
        href="https://drive.google.com/file/d/1nRZFNdAdmTT531YFfsWlpZRv9e4v-p-d/view?usp=drivesdk"
        className={classes.button}
      >
        DOWNLOAD SCHEDULE
      </a>
    </div>
  );
};

export default ScheduleContent;
