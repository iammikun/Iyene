import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./GalleryImg.module.css";
import factsImage from "../../../Asset/Image/FactsImg.JPG";
import emerging from "../../../Asset/Image/emerging.JPG";
import life from "../../../Asset/Image/life.jpeg";
import Nigeria from "../../../Asset/Image/Nigeria.JPG";
import courseOne from "../../../Asset/Image/courseOne.jpg";
import offHero from "../../../Asset/Image/offHero.jpg";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className={classes.main}>
        {/* <h2>Auto Play</h2> */}
        <Slider {...settings} className={classes.slider}>
          <div className={classes.mover}>
            <img src={factsImage} alt="" />
          </div>
          <div className={classes.mover}>
            <img src={emerging} alt="" />
          </div>
          <div className={classes.mover}>
            <img src={life} alt="" />
          </div>
          <div className={classes.mover}>
            <img src={Nigeria} alt="" />
          </div>
          <div className={classes.mover}>
            <img src={courseOne} alt="" />
          </div>
          <div className={classes.mover}>
            <img src={offHero} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
