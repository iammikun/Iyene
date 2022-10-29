import React from "react";
import classes from "./BioImage.module.css";
import NewsGolf from "../../../Asset/Image/NewsGolf.JPG";

const BioImage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.imageContainer}>
        <img src={NewsGolf} alt="" />
      </div>
    </div>
  );
};

export default BioImage;
