import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import logoDark from "../../Asset/Image/logoDark.jpeg";

const Nav = () => {
  return (
    <div className={classes.main}>
      <div className={classes.navLink}>
        <Link to="/" className={classes.logo}>
          <img src={logoDark} alt="" />
        </Link>
        <nav className={classes.links}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="bio">
            <li>Bio</li>
          </Link>
          <Link to="oncourse">
            <li>On Course</li>
          </Link>
          <Link to="offcourse">
            <li>Off Course</li>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
