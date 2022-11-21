import React from "react";
import classes from "./NewsHero.module.css";

const NewsHero = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <h2>COMMUNITY SERVICE</h2>
        <p>
          Iyene's passion has always been focused on giving back to the society.
        </p>
      </div>
    </div>
  );
};

export default NewsHero;
