import React from "react";
import classes from "./Contact.module.css";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Socials from "../../Components/HomeSection/Socials/Socials";

const Contact = () => {
  return (
    <div className={classes.main}>
      <div className={classes.contactContainer}>
        <ContactSection />
        <Socials />
      </div>
    </div>
  );
};

export default Contact;
