import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import IntroductionPage from "./pages/Introduction";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ResumeSkills from "./pages/ResumeSkills";
import More from "./pages/More";
import Turntable from "./assets/turntable";
import "./styles/Transition.css";
import "./styles/LandingPage.css";
import "./styles/Global.css";

type Stage = "landing" | "fading" | "introduction";

const App: React.FC = () => {
  const [stage, setStage] = useState<Stage>("landing");
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [showIntro, setShowIntro] = useState(false);

  const handlePlayClick = () => {
    setFadeClass("fade-out");
    setStage("fading");

    setTimeout(() => {
      setShowIntro(true);
      setFadeClass("");
      setStage("introduction");

      setTimeout(() => {
        setFadeClass("fade-in");
      }, 50);
    }, 2000);
  };

  return (
    <div>
        {!showIntro ? (
          <div className="main-container">
            <div className={`turntable-section ${stage === "introduction" ? "turntable-intro" : ""}`}>
              <Turntable />
            </div>
            <div className="text-section">
              <LandingPage fadeClass={fadeClass} onPlay={handlePlayClick} />
            </div>
          </div>
        
        ) : (
          <>
          <div className = "main-container">
            <div className={`turntable-section ${stage === "introduction" ? "turntable-intro" : ""}`}>
              <Turntable />
            </div>

            <IntroductionPage fadeClass={fadeClass} />
            </div>
            <div id="experience">
              <Experience />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="resume">
              <ResumeSkills />
            </div>
            <div id="more">
              <More />
            </div>
          </>
        )}
        </div>
  );
};

export default App;