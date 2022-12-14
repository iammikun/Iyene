import React from "react";
import classes from "./AcademicSection.module.css";

const AcademicsHero = () => {
  return (
    <div className={classes.main}>
      <div className={classes.AcademicsHero}>
        <p>ACADEMICS</p>
      </div>
      <p className={classes.peee}>
        In academics, Iyene is a well-rounded STEM student and intends to study
        electrical engineering with specialization in artificial intelligence
        and robotics. She excels well at school and her favorite subjects are
        Physics, Chemistry, Mathematics, French, English, History, Computer
        Science(Python/Java) and Robotics.
      </p>
      <a href="https://drive.google.com/file/d/10tBuuBTl_hDb5hmyDV9_wu-5b5h5fPmf/view">
        DOWNLOAD REPORTS
      </a>
    </div>
  );
};

export default AcademicsHero;
