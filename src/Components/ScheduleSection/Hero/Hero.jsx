import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.main}>
      <div className={classes.heroSect}>
        <h3>IYENE ON THE COURSE</h3>
        <p className={classes.diff}>
          Summer 2022 Tournaments - Iyeneobong Essien
        </p>
      </div>
    </div>
  );
};

export default Hero;
