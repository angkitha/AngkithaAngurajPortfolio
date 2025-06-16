import React, { useEffect, useState } from "react";
import "../styles/ResumeSkills.css";
import FlapBoard from "../assets/FlapBoard";
import folderIcon from '../images/folder.png';
import resumeIcon from '../images/pdf.png';
import PythonIcon from '../images/python.png';
import CPPIcon from '../images/cpp.png';
import JavaIcon from '../images/java.png';
import ReactIcon from '../images/react.png';
import HTMLIcon from '../images/HTML.png';
import SQLIcon from '../images/SQL.png';
import PytorchIcon from '../images/pytorch.png';
import MATLABIcon from '../images/matlab.png';
import GitIcon from '../images/git.png';


const ResumeSkills: React.FC = () => {
  const messages = [
    "INTRODUCTION   ",
    "EXPERIENCE     ",
    "PROJECTS       ",
    "MORE           ",
  ];

  const combinedMessage = messages.join("");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveLight = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveLight);
    return () => window.removeEventListener("mousemove", moveLight);
  }, []);

  const handleRowClick = (rowIndex: number) => {
    const sectionIds = ["introduction", "experience", "projects", "more"];
    const targetId = sectionIds[rowIndex];
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-container">
      <div
        className="cursor-light"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <div className="content-wrapper">
        <div className="page-left-container">
          <FlapBoard message={combinedMessage} onRowClick={handleRowClick} />
        </div>
        <div className="page-right-container">
          <FolderArea />
        </div>
      </div>
    </div>
  );
};

const FadeTransition: React.FC<{
  show: boolean;
  children: React.ReactNode;
  duration?: number;
  direction?: "left" | "right";
  className?: string; // ✨ new
}> = ({ show, children, duration = 300, direction = "right", className = "" }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
    else {
      const timeout = setTimeout(() => setRender(false), duration);
      return () => clearTimeout(timeout);
    }
  }, [show, duration]);

  return (
    <div
      className={`fade-transition ${className} ${show ? "fade-in" : "fade-out"} slide-${direction}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {render && children}
    </div>
  );
};



const FolderArea: React.FC = () => {
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);

  return (
    <div className="folders">
      {/* Left Folder */}
      <div className="folder-icon-left">
        <FadeTransition show={!leftClicked} direction="left">
          <>
            <img
              src={folderIcon}
              alt="folder"
              onClick={() => setLeftClicked(true)}
              className="folder-img"
            />
            <div className="folder-label">Resume</div>
          </>
        </FadeTransition>
        <FadeTransition show={leftClicked} direction="left">
          <div className="pdf-view">
            <button className="back-button" onClick={() => setLeftClicked(false)}>
              &#x276F;
            </button>
            <a
              className="pdf-link"
              href="https://drive.google.com/file/d/1AhOfHVOG9tjQZwi84f0_Qk0EDyVaKt5A/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={resumeIcon} alt="PDF" />
              <span>resume.pdf</span>
            </a>
          </div>
        </FadeTransition>
      </div>

      {/* Right Folder */}
      <div className="folder-icon-right">
      <FadeTransition show={!rightClicked}>
        <>
          <img
            src={folderIcon}
            alt="folder"
            onClick={() => setRightClicked(true)}
            className="folder-img"
          />
          <div className="folder-label">Skills</div>
        </>
      </FadeTransition>
      <FadeTransition show={rightClicked}>
        <div className="rectangle-view">
          <button className="back-button" onClick={() => setRightClicked(false)}>
            &#x276E;
          </button>
          <div className="rectangle-transition">
            {[
              { label: "Python", icon: PythonIcon},
              { label: "C++", icon: CPPIcon},
              { label: "Java", icon: JavaIcon },
              { label: "React", icon: ReactIcon},
              { label: "SQL", icon: SQLIcon },
              { label: "Pytorch", icon: PytorchIcon },
              { label: "MATLAB", icon: MATLABIcon },
              { label: "Git", icon: GitIcon },
              { label: "HTML", icon: HTMLIcon},
            ].map((item, index) => (
              <div className="grid-item" key={index}>
                <img src={item.icon} alt={item.label} className="skill-icon" />
                <div className="grid-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeTransition>
</div>
    </div>
  );
};

export default ResumeSkills;
