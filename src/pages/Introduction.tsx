import React from "react";
import { Link } from "react-router-dom";
import "../styles/Introduction.css";
import ExperienceImage from '../images/kaytra.png';
import ProjectsImage from '../images/kdott.png';
import ResumeSkillsImage from '../images/outkast.png';
import MoreImage from '../images/sade.png';

interface Props {
  fadeClass: string;
}

const IntroductionPage: React.FC<Props> = ({ fadeClass }) => {
  return (
    <div id = 'introduction' className="introduction-container">
      <div className={`introduction-section-text ${fadeClass}`}>
        <div className="main-heading">
          Hi! My name is <span className="main-heading-capitalletter">A</span><span className="main-heading-highlight">ngkitha</span>.
        </div>
        <div className="second-heading">Software Engineer</div>
        <div className="third-heading">
          Seeking roles in Software Engineering + Data Analytics.
        </div>
        <div className="description-box">
          I graduated June 2024 from University of California, San Diego
          with a Bachelor's in Electrical and Computer Engineering with a
          focus in Machine Learning and Control Theory. I minored in Cognitive Science.
          I've participated in numerous professional and academic projects that
          demonstrate my prowess in generating ML models used to further data analysis
          and visualization; the majority I've accomplished using
          <span className="description-highlight"> Python</span>,
          <span className="description-highlight"> SQL</span>,
          <span className="description-highlight"> MATLAB</span>, and 
          <span className="description-highlight"> Verilog</span>.
          <p />
          Currently, I am working at
          <span className="description-highlight"> L3Harris Technologies</span> as a Software Engineer.
          I work to deliver efficient test engineering solutions that meet the standards
          of the client my team collaborates with. The majority of my work has
          refined my programming skills in 
          <span className="description-highlight"> C++</span> and Verilog.
          <p />
          In my free time, I enjoy partaking in 
          <span className="description-highlight"> front-end development projects </span>
          (such as this portfolio), working out/running, listening to music, and exploring food venues.
          Please navigate through my portfolio using the interactive vinyls to the right.
        </div>
      </div> 

      <div className={`squares-container ${fadeClass}`}>
        <a href="#experience" className="square-link">
          <div className="square-box">
            <img src={ExperienceImage} alt="Experience" />
            <div className="overlay">EXPERIENCE</div>
          </div>
        </a>
        <a href="#projects" className="square-link">
          <div className="square-box">
            <img src={ProjectsImage} alt="Projects" />
            <div className="overlay">PROJECTS</div>
          </div>
        </a>
        <a href="#resume" className="square-link">
          <div className="square-box">
            <img src={ResumeSkillsImage} alt="Resume & Skills" />
            <div className="overlay">RESUME</div>
          </div>
        </a>
        <a href="#more" className="square-link">
          <div className="square-box">
            <img src={MoreImage} alt="More" />
            <div className="overlay">MORE</div>
          </div>
        </a>
      </div>  

    </div>
    
  );
};

export default IntroductionPage;
