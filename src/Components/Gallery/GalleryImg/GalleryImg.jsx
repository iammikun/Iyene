import React from "react";
import classes from "./GalleryImg.module.css";

const GalleryImg = () => {
  return (
    <div className={classes.main}>
      <div className={classes.gallery}>
        <div className={classes.first}>
          <p>Img</p>
          <p>img</p>
        </div>
        <div className={classes.first}>
          <p>Img</p>
          <p className={classes.mix}>img</p>
        </div>
        <div className={classes.first}>
          <p className={classes.mixed}>Img</p>
          <p className={classes.special}>img</p>
        </div>
        <div className={classes.first}>
          <p>Img</p>
          <p>img</p>
        </div>
        <div className={classes.first}>
          <p className={classes.mix}>img</p>
          <p className={classes.mixed}>Img</p>
        </div>
        <div className={classes.first}>
          <p className={classes.mixed}>Img</p>
          <p className={classes.special}>img</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryImg;
