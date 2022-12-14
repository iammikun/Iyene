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
            <p> 3W - Full swing - 234 Yards - Fv view</p>
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
            <p> 3W - Full swing - 234 Yards - DTL view</p>
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
            <p> 3H - Full swing - 224 Yards - Fv view</p>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/r9wEeQUFg-I"
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
            <p> 5i- Full swing - 194 Yards - Fv views</p>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/FCM3ByYJn-E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>Fv View 1</p>
            </div>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/FkiNu4fuJBI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>Fv View 2</p>
            </div>
          </div>
          <div className={classes.swingPee}>
            <p> 6i - Full swing - 184 Yards - Fv & DTL view</p>
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
            <p> 7i - Full swing - 164 Yards - DTL(soft) & Fv view</p>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/AK-48_upa50"
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
            <p> 9i - Full swing - 154 Yards - view</p>
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
            <p> PW - Full swing - 144 Yards DTL & Fv View</p>
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
              <p>Fv View</p>
            </div>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/HP7nLYvGfJs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>DTL View 1</p>
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
            <p> 52 degrees Full swing - 134 Yards - DTL & Fv view</p>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/otO98lnw-gw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>DTL View 1</p>
            </div>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/0cw-RrCLk38"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>DTL View 2</p>
            </div>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.veedContent}>
              <iframe
                src="https://www.youtube.com/embed/dc_cI6cHoCI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>Fv View</p>
            </div>
          </div>
          <div className={classes.swingPee}>
            <p>LW Chipping DTL & Fv </p>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.veedContent}>
              <iframe
                src="https://www.youtube.com/embed/csUMle1k9Fc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>DTL Chipping</p>
            </div>
          </div>
          <div className={classes.vidContainerTwo}>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/CHFevur7RHU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>Fv View 1</p>
            </div>
            <div className={classes.vidContent}>
              <iframe
                src="https://www.youtube.com/embed/24Hcn7yCSzc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p>Fv View 2</p>
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
