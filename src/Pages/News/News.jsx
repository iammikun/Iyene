import React from "react";
import NewsHero from "../../Components/NewsSection/NewsHero/NewsHero";
import NewsOne from "../../Components/NewsSection/NewsOne/NewsOne";
import Socials from "../../Components/HomeSection/Socials/Socials";

const News = () => {
  return (
    <div>
      <div>
        <NewsHero />
        <NewsOne />
        <Socials />
      </div>
    </div>
  );
};

export default News;
