import React from "react";
import Footer from "../../Components/Footer/Footer.jsx";
import Hero from "../../Components/HomeSection/Hero.jsx";
import Review from "../../Components/HomeSection/Review/Review.jsx";
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
        <Review />
        <Socials />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
