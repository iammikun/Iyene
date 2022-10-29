import React from "react";
import classes from "./ContactSection.module.css";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className={classes.main}>
      <div className={classes.contactSectionContainer}>
        <p>CONTACT US</p>
        <div className={classes.line}></div>
      </div>
      <div className={classes.contactForm}>
        <form
          action="mailto:iyene.essien@gmail.com"
          onClick="submit"
          id="login"
        >
          <input type="text" placeholder="Name" />
          <div className={classes.flexForm}>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
          </div>
          <Link to="mailto:iyene.essien@gmail.com">
            <button>SEND A MESSAGE</button>
          </Link>
        </form>
        <div className={classes.call}>
          <h3>Give us a call</h3>
          <div className={classes.line}></div>
          <div className={classes.pee}>
            <p>+234-708-714-7241</p>
            <p>+234-811-810-1579</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
