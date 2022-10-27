import React from "react";
import Socials from "../../Components/HomeSection/Socials/Socials";
import Hero from "../../Components/OffCourseSection/Hero/Hero";
import SectionTwo from "../../Components/OffCourseSection/SectionTwo/SectionTwo";
import Service from "../../Components/OffCourseSection/Service/Service";

const Offcourse = () => {
  return (
    <div>
      <div>
        <Hero />
        <Service />
        <SectionTwo />
        <Socials />
      </div>
    </div>
  );
};

export default Offcourse;
