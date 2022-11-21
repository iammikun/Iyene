import React from "react";
import AwardsImg from "../../Components/Awards/AwardsImg";
import classes from "./Awards.module.css";

const Awards = () => {
  return (
    <div className={classes.main}>
      <div className={classes.awardsComponents}>
        <AwardsImg />
      </div>
    </div>
  );
};

export default Awards;
