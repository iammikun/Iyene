import React from "react";
import classes from "./SwingHero.module.css";

const SwingHero = () => {
  return (
    <div className={classes.main}>
      <div className={classes.swingContainer}>
        <p>SWINGS</p>
        <p className={classes.swingPee}>
          Driver - Full swing - 314 Yards - Fv view
        </p>
      </div>
    </div>
  );
};

export default SwingHero;
