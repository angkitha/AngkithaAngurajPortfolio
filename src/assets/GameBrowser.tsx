import React from "react";
import "../assetStyles/GameBrowser.css";
import ZeldaGif from "../images/zelda.gif";

const GameBrowser: React.FC = () => {
  return (
    <div className="game-browser">
      <div className="game-browser-header">
        <span>game.exe</span>
        <span className="close-button">x</span>
      </div>
      <div className="game-browser-content">
      <div className="image-placeholder">
        <div className="image-wrapper">
          <img src={ZeldaGif} alt="gif" />
          <div className="blue-overlay" />
        </div>
      </div>  
      </div>
      <div className="game-browser-footer">
        <span>W: UP | A: LEFT | S: DOWN | D: LEFT</span>
        <div className="jump-button"></div>
        <span>JUMP</span>
      </div>
    </div>
  );
};

export default GameBrowser;
