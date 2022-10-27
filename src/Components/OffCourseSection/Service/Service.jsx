import React from "react";
import { Link } from "react-router-dom";
import classes from "./Service.module.css";

const Service = () => {
  return (
    <div className={classes.main}>
      <div className={classes.serviceContainer}>
        <p>
          As part of Iyene’s passion and effort in giving back to the society,
          she was invited to participate and play in a Pro/Am golfing charity
          event - East Coast Classic - organized by Betsy King’s Golf Fore
          Africa. The event was played at Siwanoy Country Club, Bronxville,
          Eastchester, New York, June 13, 2022. The event had many active LPGA
          professional golfers in attendance including the female golf legend
          Laura Davis. Iyene Essien was the only junior golfer. Iyene shot
          2-under par 72 and won the longest drive. Iyene received many revs and
          appreciation for her participation and performance at the event. Golf
          Fore Africa is a non-for-profit organization created by Betsy King,
          former LPGA professional, with a mission « To bring hope and change to
          children & families living in extreme poverty in Africa by empowering
          the golf community to support transformational programs that
          holistically enhance the families we serve » through golf.
        </p>
        <Link to="https://golfforeafrica.org">See More</Link>
      </div>
    </div>
  );
};

export default Service;
