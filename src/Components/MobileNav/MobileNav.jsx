import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MobileNav.module.css";
import logoDark from "../../Asset/Image/logoDark.jpeg";
import { AiOutlineDown } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenuLeft
      className={classes.hamburger}
      size="40px"
      color="lightblue"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgClose
      className={classes.hamburger}
      size="40px"
      color="lightblue"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <div className={classes.main}>
      <div className={classes.mobileNavContainer}>
        <div className={classes.mobileView}>
          <Link to="/" className={classes.logo}>
            <h1>Iyene Essien</h1>
            {/* <img src={logoDark} alt="" /> */}
          </Link>
        </div>
      </div>
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <nav className={classes.links}>
          <Link to="biography">
            <li>Biography</li>
          </Link>
          <Link to="swing">
            <li>Swing Videos</li>
          </Link>
          <p className={classes.onCourse}>
            <li>
              ON COURSE <AiOutlineDown className={classes.arrow} />
            </li>
            <div className={classes.hover}>
              <Link to="gallery">gallery</Link>
              <Link to="schedule">Schedule</Link>
            </div>
          </p>
          <p className={classes.offCourse}>
            <li>
              OFF COURSE <AiOutlineDown className={classes.arrow} />
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
      )}
    </div>
  );
};

export default MobileNav;
