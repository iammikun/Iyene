import React from "react";
import classes from "./OffCourse.module.css";
import { Link } from "react-router-dom";
import Nigeria from "../../../Asset/Image/Nigeria.JPG";

const OffCourse = () => {
  return (
    <div className={classes.main}>
      <div className={classes.sectionContainer}>
        <div className={classes.OffImg}>
          <img src={Nigeria} alt="" />
        </div>
        <div className={classes.OffSect}>
          <h1>OFF THE COURSE</h1>
          <p>
            Iyene has always been driven and motivated, maximising every
            opportunity to own her story, represent her country and impact her
            world, one day at a time...
          </p>
          <Link to="community-service">
            <button>READ MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OffCourse;
