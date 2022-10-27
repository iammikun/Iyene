import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import logoDark from "../../Asset/Image/logoDark.jpeg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDowwn } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <div className={classes.main}>
      <div className={classes.navLink}>
        <Link to="/" className={classes.logo}>
          <img src={logoDark} alt="" />
        </Link>
        <nav className={classes.links}>
          <Link to="bio">
            <li>Bio</li>
          </Link>
          <Link className={classes.onCourse} to="oncourse">
            <li>On Course</li>
            <div className={classes.hover}>
              <Link to="gallery">gallery</Link>
              <Link to="swing">Swing videos</Link>
              <Link to="schedule">Schedule</Link>
            </div>
          </Link>
          <Link to="offcourse">
            <li>Off Course</li>
          </Link>
          <Link to="contact">
            <li>Contact</li>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
