import React from "react";
import BioHero from "../../Components/BioSection/BioHero/BioHero";
import BioText from "../../Components/BioSection/BioText/BioText";
import Facts from "../../Components/BioSection/Facts/Facts";
import classes from "./Bio.module.css";
import Socials from "../../Components/HomeSection/Socials/Socials";

const Bio = () => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <BioHero />
        <Facts />
        <BioText />
        <Socials />
      </div>
    </div>
  );
};

export default Bio;
