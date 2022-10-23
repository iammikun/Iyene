import React from "react";
import classes from "./BioText.module.css";

const BioText = () => {
  return (
    <div className={classes.main}>
      <div className={classes.BioText}>
        <h2>Iyeneobong E. Essien</h2>
        <div className={classes.line}></div>
        <p>
          {" "}
          Iyene now 16 years old, is highly driven, talented, motivated and
          focused young junior golf amateur prodigy and currently Nigeria’s #1
          girls’ junior golfer. She is playing off handicap 3.5 with scoring
          average of 73.5. She started playing the game of golf at tender age of
          5.{" "}
        </p>
        <p>
          {" "}
          She is currently attending high school at The Taft School, Watertown,
          CT, USA and is 11th grader. Iyene is currently the #2 player and
          member of The Taft School Girls’ Varsity Golf team – winners of 2022
          Founders League High School Golf Tournament in Connecticut, USA. She
          is also a member of Taft School junior varsity basketball girls’ team
          and the Taft Robotics team.In academics, Iyene is a well-rounded STEM
          student and intends to study electrical engineering with
          specialization in artificially intelligence and robotics.
        </p>
        <p>
          {" "}
          She excels well at school and her favorite subjects are Physics,
          Chemistry, Mathematics, Computer science – Programing in Python
          language, French, English, History, and Robotics. In golf, Iyene has
          represented Nigeria in many international golf completions in USA, UK
          and Africa. She represented Nigeria at the Africa Junior Golf
          competitions in Morocco 🇲🇦 and Botswana 🇧🇼 over the in 2018/2019.
          Nigerian Golf Federation (NGF) selected Iyene, as one of the best
          under 16 junior player to represent Nigeria at R&A Junior Golf
          Championship in Monifieth, Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿 July 11-13, 2022.
        </p>
        <p>
          Previously, she was selected to represent Nigeria 🇳🇬 at The Summer
          Youth Olympics which was scheduled to take place in Dakar Senegal 🇸🇳
          in summer 2022 but is now postponed to summer 2026. Iyene is looking
          forward to playing collegiate golf in one of the best D1 colleges and
          universities in the USA 🇺🇸 after her high school at The Taft School in
          2024.
        </p>
      </div>
    </div>
  );
};

export default BioText;
