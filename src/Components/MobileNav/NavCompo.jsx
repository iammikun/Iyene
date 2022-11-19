import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import classes from "./MobileNav.module.css";
import OffCompo from "../MobileNav/OffCompo";

const NavCompo = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className={classes.main}>
      <div className={classes.navComponent}>
        <div className={open ? classes.open : classes.onCourse}>
          <span>
            ON COURSE{" "}
            <AiOutlineDown
              className={classes.arrow}
              onClick={() => setOpen(!open)}
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
        <OffCompo />
      </div>
    </div>
  );
};

export default NavCompo;
