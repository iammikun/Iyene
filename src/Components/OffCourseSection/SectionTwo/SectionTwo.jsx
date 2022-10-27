import React from "react";
import classes from "./SectionTwo.module.css";
import Golf from "../../../Asset/Image/Golf.mp4";

const SectionTwo = () => {
  return (
    <div className={classes.main}>
      <div className={classes.sectionContainer}>
        <h1>News</h1>
      </div>
      <div className={classes.newsCardContainer}>
        <div className={classes.cardOne}>
          <p>
            President Buhari congratulates Iyene's success at World Golf
            Championship
          </p>
          <a
            href="https://statehouse.gov.ng/news/president-buhari-congratulates-16-year-old-nigerian-golfer-success-at-world-golf-championship/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEE MORE
          </a>
        </div>
        <div className={classes.cardOne}>
          <img src={Golf} alt="" />
          <p>
            Honoured-by-akwa-ibom-iyene-essien-dreams-of-becoming-world-beater
          </p>
          <a
            href="https://guardian.ng/sport/honoured-by-akwa-ibom-iyene-essien-dreams-of-becoming-world-beater/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEE MORE
          </a>
        </div>
        <div className={classes.cardOne}>
          <p>
            {" "}
            Iyene-essien-the-making-of-an-emerging-golf-star-the-guardian-nigeria-news
          </p>
          <a
            href="https://abbeyfealegolfclub.com/iyene-essien-the-making-of-an-emerging-golf-star-the-guardian-nigeria-news/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEE MORE
          </a>
        </div>
        <div className={classes.cardOne}>
          <p>Article/us-nigeria-golf-idUSKBN1Z10M1</p>
          <a
            href="https://www.reuters.com/article/us-nigeria-golf-idUSKBN1Z10M1"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEE MORE
          </a>
        </div>
        <div className={classes.cardOne}>
          <p>Article/us-nigeria-golf-idUSKBN1Z10M1</p>
          <a
            href="https://amp.cnn.com/cnn/2022/08/22/sport/iyeneobong-essien-golf-nigeria-spc-spt-intl/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEE MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
