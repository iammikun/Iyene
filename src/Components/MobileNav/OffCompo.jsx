import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import classes from "./OffCompo.module.css";

const OffCompo = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className={classes.main}>
      <div className={classes.offComponent}>
        <div className={open ? classes.open : classes.offCourse}>
          <span>
            OFF COURSE{" "}
            <AiOutlineDown
              className={classes.arrow}
              onClick={() => setOpen(!open)}
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
            <Link to="school-records" onclick={closeMenu}>
              Academics
            </Link>
            <Link to="awards" onClick={closeMenu}>
              Awards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCompo;
