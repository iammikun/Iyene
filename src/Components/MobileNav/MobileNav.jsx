import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MobileNav.module.css";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineDown } from "react-icons/ai";
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

  const closeMenu = () => {
    setOpen(false);
    setDropDown(false);
    setDropDownOff(false);
  };

  const [dropDown, setDropDown] = useState(false);

  const [dropDownOff, setDropDownOff] = useState(false);

  return (
    <div className={classes.main}>
      <div className={classes.mobileNavContainer}>
        <div className={classes.mobileView}>
          <Link to="/" className={classes.logo} onClick={closeMenu}>
            <h1>Iyene Essien</h1>
          </Link>
        </div>
      </div>
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <nav className={classes.links}>
          <Link to="/" onClick={closeMenu}>
            <li>Home</li>
          </Link>
          <Link to="biography" onClick={closeMenu}>
            <li>Biography</li>
          </Link>
          <Link to="swing" onClick={closeMenu}>
            <li>Swing Videos</li>
          </Link>
          <div className={classes.navComponent}>
            <div className={dropDown ? classes.dropDown : classes.onCourse}>
              <span>
                ON COURSE{" "}
                <AiOutlineDown
                  className={classes.arrow}
                  onClick={() => setDropDown(!dropDown)}
                />
              </span>
              <div className={classes.hover}>
                <Link to="gallery" onClick={closeMenu}>
                  gallery
                </Link>
                <Link to="schedule" onClick={closeMenu}>
                  Schedule
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.offComponent}>
            <div
              className={dropDownOff ? classes.dropDownOff : classes.offCourse}
            >
              <span>
                OFF COURSE{" "}
                <AiOutlineDown
                  className={classes.arrow}
                  onClick={() => setDropDownOff(!dropDownOff)}
                />
              </span>
              <div className={classes.hover}>
                <Link to="news" onClick={closeMenu}>
                  News
                </Link>
                <Link to="interview" onClick={closeMenu}>
                  Interviews
                </Link>
                <Link to="community-service" onClick={closeMenu}>
                  Community services
                </Link>
                <Link to="school-records" onClick={closeMenu}>
                  Academics
                </Link>
                <Link to="awards" onClick={closeMenu}>
                  Awards
                </Link>
              </div>
            </div>
          </div>
          <Link to="contact" onClick={closeMenu}>
            <li>Contact</li>
          </Link>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
