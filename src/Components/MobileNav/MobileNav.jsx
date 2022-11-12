import React from "react";
import { Link } from "react-router-dom";
import classes from "./MobileNav.module.css";
import { AiOutlineDown } from "react-icons/ai";

const MobileNav = () => {
  return (
    <div className={classes.main}>
      <div className={classes.mobileNavContainer}>
        <div className={classes.mobileView}>
          <Link to="/" className={classes.logo}>
            <h1>I E</h1>
          </Link>
        </div>
        <nav className={classes.links}>
          <Link to="biography">
            <li>Biography</li>
          </Link>
          <Link to="swing">
            <li>Swing Videos</li>
          </Link>
          <p className={classes.onCourse}>
            <li>
              On Course <AiOutlineDown className={classes.arrow} />
            </li>
            <div className={classes.hover}>
              <Link to="gallery">gallery</Link>
              <Link to="schedule">Schedule</Link>
            </div>
          </p>
          <p className={classes.offCourse}>
            <li>
              Off Course <AiOutlineDown className={classes.arrow} />
            </li>
            <div className={classes.hover}>
              <Link to="news">News</Link>
              <Link to="interview">Interviews</Link>
              <Link to="community-service">Community services</Link>
              <Link to="school-records">Academics</Link>
              <Link to="awards">Awards</Link>
            </div>
          </p>
          <Link to="contact">
            <li>Contact</li>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
