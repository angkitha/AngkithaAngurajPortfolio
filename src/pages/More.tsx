import React from "react";
import "../styles/More.css";
import GameBrowser from "../assets/GameBrowser";
import sephirothGif from "../images/sephiroth.gif";
import cloudGif from "../images/cloud.gif";
import newfoldericon from "../images/whitefolder.png";

const More: React.FC = () => {
  return (
    <div className="page-container">
      <div className="left-right-container">
      <div className="more-content">
        <div className="left-side">
          <GameBrowser />
        </div>
        <div className="right-side">
          <div className="gif-grid">
            <img src={sephirothGif} alt="GIF 1" className="square-gif" />
            <img src={cloudGif} alt="GIF 2" className="square-gif" />
          </div>
          <h2 className="thank-you">THANK YOU FOR READING</h2>
          <div className="second-headline">Here's more about me.</div>
          <ul>
            <li>
              I love to <span className = "ul-highlight">work out</span> and run!
              <ul>
                <li>I was a finisher of the <span className = "ul-highlight">La Jolla Half Marathon</span> in May of 2024</li>
                <li>Working on training for a full marathon in 2025!</li>
              </ul>
            </li>
            <li>
              I love listening to <span className = "ul-highlight">music</span>.
              <ul>
                <li>My favorite genres are Hip-Hop and Soul.</li>
                <li>If you have recommendations, please connect with me!</li>
              </ul>
            </li>
            <li>
              I love exploring new <span className = "ul-highlight">food</span> venues.
              <ul>
                <li>My friends always look to me for recommendations</li>
                <li>Ask me about places to eat in LA, SF, and/or SD!</li>
              </ul>
            </li>
            <li>I enjoy <span className = "ul-highlight">UI/UX</span> and graphic design</li>
            <ul>
              <li>I started experimenting with Photoshop in 10th grade</li>
              <li>Please check my design portfolio down below</li>
            </ul>
          </ul>
          <div className="folder-grid">
            <a
              href="https://your-link-1.com"
              target="_blank"
              rel="noopener noreferrer"
              className="folder-item"
            >
              <img src={newfoldericon} alt="Spotify" className="folder-to-link" />
              <div className="folder-label">Spotify</div>
            </a>
            <a
              href="https://your-link-2.com"
              target="_blank"
              rel="noopener noreferrer"
              className="folder-item"
            >
              <img src={newfoldericon} alt="Food List" className="folder-to-link" />
              <div className="folder-label">Food List</div>
            </a>
            <a
              href="https://your-link-3.com"
              target="_blank"
              rel="noopener noreferrer"
              className="folder-item"
            >
              <img src={newfoldericon} alt="Design" className="folder-to-link" />
              <div className="folder-label">Design</div>
            </a>
          </div>
        </div>
      </div>
      </div>
      {/* Firefly background */}
      <div className="firefly-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="firefly"></div>
        ))}
      </div>
      {/* Static footer */}
      <footer className="end-footer">
        <a href="#introduction">INTRODUCTION</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#projects">PROJECTS</a>
        <a href="#resume">RESUME</a>
      </footer>
    </div>
  );
};

export default More;
