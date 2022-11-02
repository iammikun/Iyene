import React from "react";
import Goals from "../../Components/HomeSection/Goals/Goals.jsx";
import Hero from "../../Components/HomeSection/Hero.jsx";
import ReviewTxt from "../../Components/HomeSection/Review/ReviewTxt.jsx";
import Offcourse from "../../Components/HomeSection/SectionThree/OffCourse";
import OnCourse from "../../Components/HomeSection/SectionTwo/OnCourse.jsx";
import Socials from "../../Components/HomeSection/Socials/Socials.jsx";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <Hero />
        <OnCourse />
        <Offcourse />
        <ReviewTxt />
        <Goals />
        <Socials />
      </div>
    </div>
  );
};

export default Home;
