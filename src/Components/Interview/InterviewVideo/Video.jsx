import React from "react";
import classes from "./Video.module.css";

const Video = () => {
  return (
    <div className={classes.main}>
      <div className={classes.sectVideo}>
        <div className={classes.veedeo}>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fweb.facebook.com%2FBBCMediaActionNaija%2Fvideos%2F2337728809627410%2F&show_text=false&width=476&t=0"
            title="YouTube video player"
            allowfullscreen="true"
            // frameborder="0"
            allow="autoplay;"
            // allowFullScreen
          ></iframe>
          <p>At 5 Iyene wins her first trophy</p>
        </div>
        <div className={classes.veedeo}>
          <iframe
            src="https://www.youtube.com/embed/ktH3cBtkpz4?start=53"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>Welcome to the road of Iyene Essien</p>
        </div>
      </div>
      <div className={classes.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/gAhmeyaCaYI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; gyroscope; picture-in-picture clipboard-write; encrypted-media"
          allowfullscreen
        ></iframe>
        <p>Teenage Golf Star Who Is Eager To Take The World By Storm</p>
      </div>
    </div>
  );
};

export default Video;
