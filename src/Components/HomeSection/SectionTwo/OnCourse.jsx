import React from "react";
import classes from "./OnCourse.module.css";
import { Link } from "react-router-dom";
import Course from "../../../Asset/Image/Course.JPG";

const OnCourse = () => {
  return (
    <div className={classes.main}>
      <div className={classes.OnSection}>
        <div className={classes.flexSection}>
          <h1>ON THE COURSE</h1>
          <p>
            Since winning her first medal at age five, Iyene continues  to build
            on her legacy with characteristic persistence, discipline and
            passion that makes her stand out from the  crowd.
          </p>
          <Link to="oncourse">
            <button>SEE MORE</button>
          </Link>
        </div>
        <div className={classes.OnImg}>
          <img src={Course} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OnCourse;
