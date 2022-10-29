import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import logoDark from "../../Asset/Image/logoDark.jpeg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDowwn } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <div className={classes.main} id="header">
      <div className={classes.navLink}>
        <Link to="/" className={classes.logo}>
          <img src={logoDark} alt="" />
        </Link>
        <nav className={classes.links}>
          <Link to="biography">
            <li>Biography</li>
          </Link>
          <p className={classes.onCourse}>
            <li>On Course</li>
            <div className={classes.hover}>
              <Link to="gallery">gallery</Link>
              <Link to="swing">Swing videos</Link>
              <Link to="schedule">Schedule</Link>
            </div>
          </p>
          <p className={classes.offCourse}>
            <li>Off Course</li>
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

export default Nav;
