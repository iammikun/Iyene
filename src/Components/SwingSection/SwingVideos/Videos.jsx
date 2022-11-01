import React from "react";
import classes from "./Videos.module.css";

const Videos = () => {
  return (
    <div className={classes.main}>
      <div className={classes.vidContainer}>
        <div className={classes.vidContent}>
          <video autoplay controls>
            <source src="Video/IMG_7991.mp4" type="video/mp4" />
          </video>
          <p>view 1</p>
        </div>
        <div className={classes.vidContent}>
          <video autoplay controls>
            <source src="Video/IMG_7991.mp4" type="video/mp4" />
          </video>
          <p>view 2</p>
        </div>
      </div>
    </div>
  );
};

export default Videos;
