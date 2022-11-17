import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MobileNav.module.css";
import { CgMenuLeft } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import NavCompo from "./NavCompo";

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
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="biography">
            <li>Biography</li>
          </Link>
          <Link to="swing">
            <li>Swing Videos</li>
          </Link>
          <NavCompo />
          <Link to="contact">
            <li>Contact</li>
          </Link>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
