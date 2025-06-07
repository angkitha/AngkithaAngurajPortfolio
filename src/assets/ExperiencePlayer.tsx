import React from 'react';
import { ReactNode } from "react";
import '../assetStyles/ExperiencePlayer.css';
import * as FaIcons from 'react-icons/fa';

const MinimizeIcon = FaIcons.FaWindowMinimize as unknown as React.FC;
const MaximizeIcon = FaIcons.FaWindowMaximize as unknown as React.FC;
const CloseIcon = FaIcons.FaTimes as unknown as React.FC;
const PauseIcon = FaIcons.FaPause as unknown as React.FC;
const ForwardIcon = FaIcons.FaForward as unknown as React.FC;
const BackwardIcon = FaIcons.FaBackward as unknown as React.FC;



interface ExperiencePlayerProps {
  title: string;
  company: string;
  date: string;
  description: ReactNode[];
  skills: string[];
  thumbnail: string; 
}


const ExperiencePlayer: React.FC<ExperiencePlayerProps> = ({ title, company, date, description, skills, thumbnail }) => {
  return (
    <div className="experience-player-window">
      <div className="experience-player-titlebar">
        <div className="window-buttons">
          <div className = "minimize"><MinimizeIcon /></div>
          <div className = "maximize"><MaximizeIcon /></div>
          <div className = "close"><CloseIcon /></div>
        </div>
      </div>
      <div className="experience-player-content">
        <div className="experience-player-top">
          <div className="experience-player-info">
            <h2>{title}</h2>
            <p className="company">{company}</p>
            <p className="date">{date}</p>
            <div className="controls">
            <div className = "pause-button"><PauseIcon /></div>
            <div className = "forward-reverse-button"><BackwardIcon /></div>
            <div className = "forward-reverse-button"><ForwardIcon /></div>
            </div>
          </div>
          <div className="experience-player-thumbnail">
            <img src={thumbnail} alt={`${company} thumbnail`} />
          </div>
        </div>

        <div className="tags">
          <span>Skills:</span>
          {skills.map((skill, index) => (
            <span className="tag" key={index}>{skill}</span>
          ))}
        </div>

        <div className="description">
          <p><b>Description:</b></p>
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePlayer;
