import React from "react";
import classes from "./Goals.module.css";

const Goals = () => {
  return (
    <div className={classes.main}>
      <div className={classes.goalsContainer}>
        <h2>FUTURE GOALS</h2>
        <ul>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
        </ul>
      </div>
    </div>
  );
};

export default Goals;
