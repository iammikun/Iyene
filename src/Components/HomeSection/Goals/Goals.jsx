import React from "react";
import classes from "./Goals.module.css";
import Accordion from "../Accordion/Accordion";

const Goals = () => {
  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <h1>FUTURE GOALS</h1>
      </div>
      <Accordion />
    </div>
  );
};

export default Goals;
