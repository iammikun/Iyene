import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import classes from "./OffCompo.module.css";

const OffCompo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.main}>
      <div className={classes.offComponent}>
        <div className={open ? classes.open : classes.offCourse}>
          <span>
            OFF COURSE{" "}
            <AiOutlineDown
              className={classes.arrow}
              onClick={() => setOpen(!open)}
            />
          </span>
          <div className={classes.hover}>
            <Link to="news">News</Link>
            <Link to="interview">Interviews</Link>
            <Link to="community-service">Community services</Link>
            <Link to="school-records">Academics</Link>
            <Link to="awards">Awards</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCompo;
