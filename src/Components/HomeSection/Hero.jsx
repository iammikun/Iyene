import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={classes.main}>
      <div className={classes.heroContainer}>
        <h1>Nigeria's #1 junior girls' golfer.</h1>
        <Link to="bio">
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
