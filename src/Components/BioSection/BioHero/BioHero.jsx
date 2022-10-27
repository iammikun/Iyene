import React from "react";
import classes from "./BioHero.module.css";
import { Link } from "react-router-dom";

const BioHero = () => {
  return (
    <div className={classes.main}>
      <div className={classes.bioHeroContainer}>
        <p>IYENE'S PROFILE</p>
        <Link to="swing">Watch Swing Videos</Link>
      </div>
    </div>
  );
};

export default BioHero;
