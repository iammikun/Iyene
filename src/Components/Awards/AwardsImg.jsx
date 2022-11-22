import React from "react";
import classes from "./AwardsImg.module.css";
import wrap from "../../../src/Asset/Image/wrag.jpeg";
import dwag from "../../Asset/Image/dwag.jpeg";
import group from "../../../src/Asset/Image/group.jpeg";
import solo from "../../../src/Asset/Image/solo.jpeg";

const AwardsImg = () => {
  return (
    <div className={classes.main}>
      <p>AWARDS</p>
      <div className={classes.awardsContent}>
        <div className={classes.awardsImgs}>
          <img src={wrap} alt="" />
          <p>Iyene Essien wins (HJGT) in Verona New York July 6-7, 2022</p>
        </div>
        <div className={classes.awardsImgs}>
          <img src={dwag} alt="" />
          <p>
            Iyene Essien finished second place at the World championship
            invitational; representing Nigeria July 26 - 28
          </p>
        </div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.awardsContentTwo}>
        <div className={classes.awardsImgsTwo}>
          <img src={group} alt="" />
          <p>
            Iyene Essien finished third place at the (HJGT) Poughkeepsie, New
            York August 13 - 14 2022
          </p>
        </div>
        <div className={classes.awardsImgsTwo}>
          <img src={solo} alt="" />
          <p>
            Iyene Essien finishes T15 at the U.S Kids Golf World Teen
            Championship 2019
          </p>
        </div>
      </div>
      <div className={classes.line}></div>
    </div>
  );
};

export default AwardsImg;
