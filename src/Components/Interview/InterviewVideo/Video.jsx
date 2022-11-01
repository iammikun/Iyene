import React from "react";
import classes from "./Video.module.css";

const Video = () => {
  return (
    <div className={classes.main}>
      <div className={classes.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/ktH3cBtkpz4"
          title="YouTube video player"
          frameborder="0"
          allow=" autoplay;"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
