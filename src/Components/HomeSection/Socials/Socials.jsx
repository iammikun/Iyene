import React from "react";
import classes from "./Socials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className={classes.main}>
      <div className={classes.socialsContainer}>
        <h1>FOLLOW ME</h1>
        <div className={classes.line}></div>
        <div className={classes.singleCol}>
          <a
            href="https://www.youtube.com/channel/UCEIX-mt9scS--lFOGHTRqIw"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.youtube}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.instagram.com/iyene_essien/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.instagram}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com/iyenee?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.twitter}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          {/* <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkedin}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Socials;
