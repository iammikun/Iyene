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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              id voluptates, veritatis cupiditate quae exercitationem a sed
              dignissimos consequuntur velit praesentium quasi, asperiores eum
              quaerat aut. Rerum necessitatibus temporibus impedit!
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              id voluptates, veritatis cupiditate quae exercitationem a sed
              dignissimos consequuntur velit praesentium quasi, asperiores eum
              quaerat aut. Rerum necessitatibus temporibus impedit!
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              id voluptates, veritatis cupiditate quae exercitationem a sed
              dignissimos consequuntur velit praesentium quasi, asperiores eum
              quaerat aut. Rerum necessitatibus temporibus impedit!
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              id voluptates, veritatis cupiditate quae exercitationem a sed
              dignissimos consequuntur velit praesentium quasi, asperiores eum
              quaerat aut. Rerum necessitatibus temporibus impedit!
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
