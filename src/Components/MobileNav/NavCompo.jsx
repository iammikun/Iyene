import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import classes from "./MobileNav.module.css";

const NavCompo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.main}>
      <div className={classes.navComponent}>
        <div className={`open ? ${classes.open} : ${classes.onCourse}`}>
          <span>
            ON COURSE{" "}
            <AiOutlineDown
              className={classes.arrow}
              onClick={() => setOpen(!open)}
            />
          </span>
          <div className={classes.hover}>
            <Link to="gallery">gallery</Link>
            <Link to="schedule">Schedule</Link>
          </div>
        </div>
        <div className={`${classes.offCourse} ${classes.open}`}>
          <span>
            OFF COURSE <AiOutlineDown className={classes.arrow} />
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

export default NavCompo;
