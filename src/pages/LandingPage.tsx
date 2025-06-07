import React from "react";
import "../styles/LandingPage.css";

interface Props {
  fadeClass: string;
  onPlay: () => void;
}

const LandingPage: React.FC<Props> = ({ fadeClass, onPlay }) => {
  return (
    <div className={`landing-page-container ${fadeClass}`}>
      <div className= "rightside-content">
        <div className="landing-text">
          <span className="landing-text-line-1">welcome to my</span>
          <div className="landing-text-line-2-container">
            <span className="landing-text-line-2-capitalletter">P</span>
            <span className="landing-text-line-2-highlight">ORTFOLIO</span>
          </div>
        </div>
        
        <div className="play-instruction-container">
          <p className="play-instruction-landing">PRESS PLAY TO START</p>
          <button className="play-button" onClick={onPlay} aria-label="Play">
            <div className="play-icon"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
