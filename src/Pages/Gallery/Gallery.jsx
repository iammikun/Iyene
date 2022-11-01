import React from "react";
import Content from "../../Components/Gallery/Content/Content";
import Hero from "../../Components/Gallery/Hero/Hero";
import GalleryImg from "../../Components/Gallery/GalleryImg/GalleryImg";
import Socials from "../../Components/HomeSection/Socials/Socials";

const Gallery = () => {
  return (
    <div>
      <div>
        <Hero />
        <Content />
        <GalleryImg />
        <Socials />
      </div>
    </div>
  );
};

export default Gallery;
