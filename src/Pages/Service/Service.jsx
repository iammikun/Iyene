import React from "react";
import NewsHero from "../../Components/NewsSection/NewsService/NewsHero";
import NewsService from "../../Components/NewsSection/NewsService/NewsService";
import Socials from "../../Components/HomeSection/Socials/Socials";

const Service = () => {
  return (
    <div>
      <div>
        <NewsHero />
        <NewsService />
        <Socials />
      </div>
    </div>
  );
};

export default Service;
