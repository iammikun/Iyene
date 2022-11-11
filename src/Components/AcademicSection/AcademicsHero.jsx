import React from "react";
import classes from "./AcademicSection.module.css";

const AcademicsHero = () => {
  return (
    <div className={classes.main}>
      <div className={classes.AcademicsHero}>
        <p>ACADEMICS</p>
      </div>
      <button>DOWNLOAD REPORTS</button>
    </div>
  );
};

export default AcademicsHero;
