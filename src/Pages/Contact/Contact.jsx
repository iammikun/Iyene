import React from "react";
import classes from "./Contact.module.css";
import ContactSection from "../../Components/ContactSection/ContactSection";

const Contact = () => {
  return (
    <div className={classes.main}>
      <div className={classes.contactContainer}>
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;
