import React from "react";
import classes from "./BioHero.module.css";
// import { Link } from "react-router-dom";

const BioHero = () => {
  return (
    <div className={classes.main} id="bioHero">
      <div className={classes.bioHeroContainer}>
        <p>BIOGRAPHY</p>
        {/* <Link to="swing">Watch Swing Videos</Link> */}
      </div>
    </div>
  );
};

export default BioHero;
