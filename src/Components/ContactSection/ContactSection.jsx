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
          <input type="text" placeholder="Full Name" required />
          <div className={classes.flexForm}>
            <input type="text" placeholder="Email" required />
            <input type="text" placeholder="Phone" required />
          </div>
          <Link to="mailto:iyene.essien@gmail.com">
            <button>SEND A MESSAGE</button>
          </Link>
        </form>
        <div className={classes.call}>
          <h3>Get in touch</h3>
          <div className={classes.line}></div>
          <div className={classes.pee}>
            <h4> Eyo Essien (He/his)</h4>
            <p>+234-708-714-7241</p>
            <p>+234-811-810-1579</p>
          </div>
          <div className={classes.pee}>
            <h4>Imeh Okon (She/her)</h4>
            <p>+234-811-796-9000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
