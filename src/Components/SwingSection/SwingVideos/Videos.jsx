import React from "react";
import classes from "./Videos.module.css";

const Videos = () => {
  return (
    <div className={classes.main}>
      <div className={classes.vidContainer}>
        <div className={classes.vidContent}>
          <iframe
            src="https://www.youtube.com/embed/4ml04gf0nhA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>View 1</p>
        </div>
        <div className={classes.vidContent}>
          <iframe
            src="https://www.youtube.com/embed/Q10bm85g9oU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>View 2</p>
        </div>
      </div>
      <div className={classes.swingPee}>
        <p> Driver - Full swing - 314 Yards - DTL view</p>
      </div>
      <div className={classes.vidContainerTwo}>
        <div className={classes.vidContent}>
          <iframe
            src="https://www.youtube.com/embed/3dpgqY2poPM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>View 1</p>
        </div>
        <div className={classes.vidContent}>
          <iframe
            src="https://www.youtube.com/embed/3dpgqY2poPM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>View 2</p>
        </div>
      </div>
      <button>More Swings</button>
    </div>
  );
};

export default Videos;
