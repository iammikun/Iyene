import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.main}>
      <div className={classes.footer}>
        <span>Copyright © 2022 Iyene Essien</span>
        <div className={classes.line}></div>
      </div>
    </div>
  );
};

export default Footer;
