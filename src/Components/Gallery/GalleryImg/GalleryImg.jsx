import React, { Component } from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./GalleryImg.module.css";
import Course from "../../../Asset/Image/imageOne.JPG";
import emerging from "../../../Asset/Image/emerging.JPG";
import life from "../../../Asset/Image/life.jpeg";
import Nigeria from "../../../Asset/Image/Nigeria.JPG";
import newsGolf from "../../../Asset/Image/NewsGolf.JPG";
import FactsImg from "../../../Asset/Image/FactsImg.JPG";
import offHero from "../../../Asset/Image/offHero.jpg";
import imageTwo from "../../../Asset/Image/imageTwo.JPG";
import imageRep from "../../../Asset/Image/imageRep.JPG";
import courseOne from "../../../Asset/Image/courseOne.jpg";

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
    };
    return (
      <div className={classes.main}>
        {/* <h2> Lazy Load</h2> */}
        <Slider {...settings} className={classes.slider}>
          <div className={classes.mover}>
            <img src={emerging} alt="" />
          </div>
          <div className={classes.mover}>
            <img src={FactsImg} alt="" />
          </div>
          <div className={classes.mover}>
            <img src={courseOne} alt="" />
          </div>
          <div className={classes.mover}>
            <img src={Course} alt="" />
          </div>
          <div className={classes.mover}>
            <img src={imageTwo} alt="" />
          </div>
          <div className={classes.mover}>
            <img src={imageRep} alt="" />
          </div>
          <div className={classes.mover}>
            <img src={life} alt="" />
          </div>
          <div className={classes.mover}>
            <img src={Nigeria} alt="" />
          </div>
          <div className={classes.mover}>
            <img src={newsGolf} alt="" />
          </div>
          <div className={classes.mover6}>
            <img src={offHero} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
