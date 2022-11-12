import React, { useState } from "react";
import classes from "./Videos.module.css";

const Videos = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={classes.main}>
      <div className={classes.vidContainer}>
        <div className={classes.vidContent}>
          <iframe
            src="https://www.youtube.com/embed/4ml04gf0nhA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>View 1</p>
        </div>
        <div className={classes.vidContent}>
          <iframe
            src="https://www.youtube.com/embed/Q10bm85g9oU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>View 2</p>
        </div>
      </div>
      <div className={classes.vidContainerTwo}>
        <div className={classes.veedContent}>
          <iframe
            src="https://www.youtube.com/embed/9tNCuNLqhEw"
            title="YouTube video player"
            frameborder="0"
            frameBorder="1px solid rgb(76, 76, 76)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>View 3</p>
        </div>
      </div>
      <div className={classes.swingPee}>
        <p> Driver - Full swing - 314 Yards - DTL view</p>
      </div>
      <div className={classes.vidContainerTwo}>
        <div className={classes.vidContent}>
          <iframe
            src="https://www.youtube.com/embed/3dpgqY2poPM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>View 1</p>
        </div>
        <div className={classes.vidContent}>
          <iframe
            src="https://www.youtube.com/embed/3dpgqY2poPM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>View 2</p>
        </div>
      </div>
      {show ? (
        <>
          <div className={classes.swingPee}>
            <p> Driver - Full swing - 234 Yards - Fv view</p>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.veedContent}>
              <iframe
                src="https://www.youtube.com/embed/MOmu1Jh0Jog"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>Fv View</p>
            </div>
          </div>
          <div className={classes.swingPee}>
            <p> Driver - Full swing - 234 Yards - DTL view</p>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/ERIoYC4bBxA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>View 1</p>
            </div>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/6R0zYAv5OFY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>View 2</p>
            </div>
          </div>
          <div className={classes.swingPee}>
            <p> Driver - Full swing - 224 Yards - Fv view</p>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.veedContent}>
              <iframe
                src="https://www.youtube.com/embed/r9wEeQUFg-I"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>Fv View</p>
            </div>
          </div>
          <div className={classes.swingPee}>
            <p> Driver - Full swing - 184 Yards - Fv & DTL view</p>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/4D7O9yVNeRs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>Fv View</p>
            </div>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/UyOT5-IkhxA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>DTL View</p>
            </div>
          </div>
          <div className={classes.swingPee}>
            <p> Driver - Full swing - 164 Yards - DTL(soft) & Fv view</p>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/4D7O9yVNeRs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>DTL View</p>
            </div>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/sHUWF08e-RE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>Fv View</p>
            </div>
          </div>
          <div className={classes.swingPee}>
            <p> Driver - Full swing - 154 Yards - view</p>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.veedContent}>
              <iframe
                src="https://www.youtube.com/embed/97NNEM7L_PY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>View 1</p>
            </div>
          </div>
          <div className={classes.swingPee}>
            <p> Driver - Full swing - 144 Yards - view</p>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.veedContent}>
              <iframe
                src="https://www.youtube.com/embed/2LR_Mds37lk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>View 1</p>
            </div>
          </div>
        </>
      ) : null}
      <button onClick={() => setShow(!show)} className={classes.btn}>
        More Swings
      </button>
      {/* <button onClick={() => setShow(false)}>Less Swings</button> */}
    </div>
  );
};

export default Videos;
