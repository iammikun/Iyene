import React from "react";
import Hero from "../../Components/Gallery/Hero/Hero";
import GalleryImg from "../../Components/Gallery/GalleryImg/GalleryImg";
import Socials from "../../Components/HomeSection/Socials/Socials";

const Gallery = () => {
  return (
    <div>
      <div>
        <Hero />
        <GalleryImg />
        <Socials />
      </div>
    </div>
  );
};

export default Gallery;
