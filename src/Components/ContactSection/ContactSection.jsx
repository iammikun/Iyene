import React from "react";
import classes from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <div className={classes.main}>
      <div className={classes.contactSectionContainer}>
        <h1>GET IN TOUCH</h1>
        <div className={classes.line}></div>
      </div>
      <div className={classes.contactForm}>
        <form action="mailto:iyene.essien@gmail.com" onClick="submit">
          <input type="text" placeholder="Name" />
          <div className={classes.flexForm}>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
          </div>
          <textarea
            type="text"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message..."
          ></textarea>
          <a href="mailto:iyene.essien@gmail.com">
            <button>SEND MESSAGE</button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
