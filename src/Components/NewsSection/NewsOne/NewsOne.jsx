import React from "react";
import classes from "./NewsOne.module.css";
import Newsing from "../../../Asset/Image/Nigeria.JPG";
import NewsGolf from "../../../Asset/Image/NewsGolf.JPG";
import emerging from "../../../Asset/Image/emerging.JPG";
import golf from "../../../Asset/Image/golf.jpg";

const NewsOne = () => {
  return (
    <div className={classes.main}>
      <div className={classes.newsContainer}>
        <div className={classes.sectOne}>
          <div className={classes.newsFlex}>
            <img src={Newsing} alt="" />
          </div>
          <div className={classes.newsOne}>
            <a
              href="https://statehouse.gov.ng/news/president-buhari-congratulates-16-year-old-nigerian-golfer-success-at-world-golf-championship/"
              target="_blank"
              rel="noopener noreferrer"
            >
              President Buhari congratulates Iyene's success at World Golf
              Championship
            </a>
            <p>
              President Muhammadu Buhari congratulates Iyeneobong Essien, a
              16-year-old Nigerian girl, for finishing second at the Champion of
              Champions World Golf Championship Invitational in Northern
              Ireland.
            </p>
            <div className={classes.carding}>
              <a
                href="https://statehouse.gov.ng/news/president-buhari-congratulates-16-year-old-nigerian-golfer-success-at-world-golf-championship/"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.sectOne}>
          <div className={classes.newsOne}>
            <a
              href="https://guardian.ng/sport/honoured-by-akwa-ibom-iyene-essien-dreams-of-becoming-world-beater/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Honoured by akwa ibom iyene essien dreams of becoming world beater
            </a>
            <p>
              Nigeria’s rising international golf star, Iyeneobong Essien,
              cannot stop thanking her stars because of her heritage. The
              16-year-old prodigy, who was among Akwa Ibom State indigenes
              recently honoured by the state on its 35th-anniversary
              celebrations, told The Guardian recently that Governor Udom
              Emmanuel has given her wings to fly beyond human comprehension
            </p>
            <div className={classes.carding}>
              <a
                href="https://guardian.ng/sport/honoured-by-akwa-ibom-iyene-essien-dreams-of-becoming-world-beater/"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ MORE
              </a>
            </div>
          </div>
          <div className={classes.newsFlex}>
            <img src={NewsGolf} alt="" />
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.sectOne}>
          <div className={classes.newsFlex}>
            <img src={emerging} alt="" />
          </div>
          <div className={classes.newsOne}>
            <a
              href="https://abbeyfealegolfclub.com/iyene-essien-the-making-of-an-emerging-golf-star-the-guardian-nigeria-news/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iyene essien the making of an emerging golf star{" "}
            </a>
            <p>
              The lines are beginning to fall in pleasant places for Iyeneobong
              Essien. From the starry-eyed infant, who first took a tiny step
              into golf at the IBB Golf and Country Club, Abuja, a few years
              ago, Iyene, as she is simply known, is growing into a much sought
              after player, who never fails to do something noteworthy at every
              given opportunity.
            </p>
            <div className={classes.carding}>
              <a
                href="https://abbeyfealegolfclub.com/iyene-essien-the-making-of-an-emerging-golf-star-the-guardian-nigeria-news/"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.sectOne}>
          <div className={classes.newsOne}>
            <a
              href="https://www.reuters.com/article/us-nigeria-golf-idUSKBN1Z10M1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Article us Nigeria Golf
            </a>
            <p>
              Iyene Essien’s golf medals already outnumber her 13 years of age,
              and she has competed on three continents. She is the top junior
              player in Nigeria, and now wants to deliver her country’s first
              gold medal for golf at the 2022 Summer Youth Olympics.
            </p>
            <div className={classes.carding}>
              <a
                href="https://www.reuters.com/article/us-nigeria-golf-idUSKBN1Z10M1"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ MORE
              </a>
            </div>
          </div>
          <div className={classes.newsFlex}>
            <img src={golf} alt="" />
          </div>
        </div>
        <div className={classes.line}></div>
      </div>
    </div>
  );
};

export default NewsOne;
