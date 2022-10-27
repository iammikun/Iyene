import React from "react";
import Review from "./Review";
import classes from "./Review.module.css";

const ReviewTxt = () => {
  return (
    <div className={classes.main}>
      <div className={classes.txtContent}>
        <h2>COACHES REVIEWS</h2>
        <div className={classes.line}></div>
      </div>
      <Review />
    </div>
  );
};

export default ReviewTxt;
