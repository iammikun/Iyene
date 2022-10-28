import React from "react";
import classes from "./NewsHero.module.css";

const NewsHero = () => {
  return (
    <div className={classes.main}>
      <div className={classes.heroContainer}>
        <p>NEWSFEED</p>
      </div>
    </div>
  );
};

export default NewsHero;
