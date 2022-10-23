import React from "react";
import classes from "./Facts.module.css";
import FactsImg from "../../../Asset/Image/FactsImg.JPG";

const Facts = () => {
  return (
    <div className={classes.main}>
      <div className={classes.factsContainer}>
        <h2>QUICK FACTS</h2>
        <div className={classes.line}></div>
        <div className={classes.highlightedFacts}>
          <div className={classes.factsImage}>
            <img src={FactsImg} alt="" />
          </div>
          <ul>
            <li>Iyene Essien (she/her/hers)</li>
            <li>Home: Abuja, Nigeria 🇳🇬 and Yonkers, NY USA 🇺🇸</li>
            <li>Class: 11th grade from September 08, 2022</li>
            <li>
              High School: The Taft School, Watertown , CT Home Golf Course:
              Watertown Golf Club, CT{" "}
            </li>
            <li>Weight: 99lbs</li>
            <li>Height: 5feet 6in.</li>
            <li>Began Playing Golf at age 5</li>
            <li>Started representing Nigeria at age 11</li>
            <li>Plays Golf: Right handed</li>
            <li>Coach Taft school: Mrs Ginger O’Shea</li>
            <li>
              Coach: John Dickson – The Johannesburg Golf Club, Woodmead,
              Sandton, South Africa 🇿🇦
            </li>
            <li>Nationality: Nigerian</li>
            <li>Born: May 17, 2006 in NY</li>
            <li>Age: 16 years</li>
            <li>Gender: Female</li>
            <li>Handicap: 3.5; scoring average 73.5</li>
            <li>Nigeria’s #1 Junior Girls’ golfer and team captain</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Facts;
