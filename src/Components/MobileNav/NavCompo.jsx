import React, { useState, useEffect } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import classes from "./MobileNav.module.css";
import OffCompo from "../MobileNav/OffCompo";

const NavCompo = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

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
            <Link to="gallery">gallery</Link>
            <Link to="schedule">Schedule</Link>
          </div>
        </div>
        <OffCompo />
      </div>
    </div>
  );
};

export default NavCompo;
