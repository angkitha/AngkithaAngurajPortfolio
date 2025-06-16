import React from "react";
import "../styles/LandingPage.css";

interface Props {
  fadeClass: string;
  onPlay: () => void;
}

const LandingPage: React.FC<Props> = ({ fadeClass, onPlay }) => {
  return (
    <div className={`landing-page-container ${fadeClass}`}>
      <div className="rightside-content">

        {/* LED display */}
        <div className="digital-display-container">
          <div className="digital-display-screen">
            <div className="scrolling-text">
              WELCOME TO MY PORTFOLIO. PRESS PLAY TO START
            </div>
          </div>
        </div>

        {/* Circle buttons */}
        <div className="button-row">
          <button className="circle-button">PREV</button>
          <button className="circle-button">NEXT</button>
          <button className="circle-button">STOP</button>
        </div>

        {/* Dial */}
        <div className="dial-container">
          <div className="dial-knob" onClick={onPlay}/>
          <div className="dial-label">PLAY</div>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
