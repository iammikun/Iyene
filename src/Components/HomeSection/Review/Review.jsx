import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import classes from "./Review.module.css";

class Review extends Component {
  render() {
    return (
      <div className={classes.main}>
        <Carousel>
          <div>
            <p className={classes.legend}>
              "I am very happy and excited to write to you about Iyene and her
              progress at The Taft School in Watertown, CT. She has transitioned
              remarkably well here as a student athlete. In the classroom and
              outside on the golf course she has made a great impact.
              Academically, she is participating and doing very well in all her
              classes English, Math, History, Science and even has taken on a
              role in Robotics! On the golf course, she played in our number two
              position all season long which is great as a 10th grader."
            </p>
            <h2>
              Mrs Ginger O'Shea, The Taft School Girls' Varsity Golf Coach ,
              Taft School mail : osheag@taftschool.org , Tel. 860-945-7840
              Sports Psychology/Girls’ Varsity Golf
            </h2>
          </div>
          <div>
            <p className={classes.legend}>
              “Based on just brief observations, Iyene has a very good swing. It
              is a great interpretation of the modern swing. Good weight
              transfer, body sequencing, and a good balanced follow-through” “I
              really think that Iyene has a very bright future in golf”
            </p>
            <h2>
              Peter Seaman, PGA Head Golf Professional 246 Guernseytown Rd.
              Watertown, CT Tel: 860.274.4387 Email:
              pseaman@watertowngolfclub.org
            </h2>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Review;
