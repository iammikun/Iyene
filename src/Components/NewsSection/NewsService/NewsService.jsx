import React from "react";
import classes from "./NewsService.module.css";
import action from "../../../Asset/Image/action.jpeg";
import malala from "../../../Asset/Image/malala.jpeg";

const NewsService = () => {
  return (
    <div className={classes.theMainContent}>
      <div className={classes.main}>
        <div className={classes.serviceImg}>
          <img src={action} alt="" />
        </div>
        <div className={classes.serviceContainer}>
          <h2>Actions Against Hunger</h2>
          <p>
            As part of my school's contribution as part of my school's
            contribution to action against hunger each year my school Ecole
            Francaise Marcel Pagnol d'Abuja, Nigeria organises a Race Against
            Hunger. This race was initiated by an NGO - Action Against Hunger, a
            global humanitarian organization, originated in France. ACF helps
            feed malnourished children and they provide Communities with water
            and food resources.
          </p>
          <p>
            On Friday the 17th of May 2019, in partnership with the NGO Pupils
            from my school is grade 5 - 12, participated in the race against
            hunger with the aim of raising funds for the malnourished population
            in the world. I participated in the race and generated 30 USD for
            the people of Chad. I ran 40 laps around my school, and I believe my
            contribution mattered greatly and I am happy for the opportunity to
            have participated in the cause.
          </p>
          <p>
            My school raised 4000 Euros in total and the money was sent to Chad
            through the NGO.
          </p>
          <a href="https://www.actionagainsthunger.org/">SEE MORE</a>
        </div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.mainTwo}>
        <div className={classes.serviceImg}>
          <img src={malala} alt="" />
        </div>

        <div className={classes.serviceContainerTwo}>
          <h2>Malala Foundation</h2>
          <p>
            Malala Foundation is an NGO which was founded by Malala to help the
            girl children lead and learn. In 2020 I was among 30 girls in sports
            from 24 countries in the world selected by Malala Foundation to
            participate in the 2020 game changers series
            -https//assembly.malala.org/game-changers
          </p>
          <p>
            I was one of the three golfers selected in the world to feature in
            the series and featured in the campaign:
            <a href="https://assembly.malala.org/stories/female-golfers-taking-a-swing-at-the-establishment">
              https://assembly.malala.org/stories/female-golfers-taking-a-swing-at-the-establishment
            </a>
          </p>
          <p>
            My participation helps in raising awareness about the lack of
            education participation in sports and developing leadership skills
            for the girl child. As a 2020 game changer and challenging the
            establishment: fighting discrimination against women in sport, and
            lack of diversity in golf. As a golfer I'm showing the girl child, a
            girl can do anything she puts her mind to!
          </p>
          <a href="https://assembly.malala.org/stories/female-golfers-taking-a-swing-at-the-establishment">
            SEE MORE
          </a>
        </div>
      </div>
      <div className={classes.line}></div>
    </div>
  );
};

export default NewsService;
