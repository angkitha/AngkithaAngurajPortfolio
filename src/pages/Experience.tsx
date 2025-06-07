import React, { useState } from "react";
import "../styles/Experience.css";
import ExperiencePlayer from "../assets/ExperiencePlayer";
import IntroductionImage from '../images/daftpunk.png';
import ProjectsImage from '../images/gorrillaz.png';
import ResumeImage from '../images/schoolboyq.png';
import MoreImage from '../images/theroots.png';
import SoftwareEngineerExperience from '../images/SoftwareEngineerExperience.png';
import SoftwareEngineeringInternExperience from '../images/SoftwareEngineeringInternExperience.png';
import APOExperience from '../images/APOExperience.png';
import SWEExperience from '../images/SWEExperience.png';


const experiences = [
  {
    title: "Software Engineer",
    company: "L3Harris Technologies",
    date: "July 2024 - Present",
    thumbnail: SoftwareEngineerExperience, 
    skills: ["C++", "Testing", "LLMs", "Python", "APIs"],
    description: [
      <>
        Worked closely with outside clientele to deliver software test engineering solutions
      </>,
      <>
        Mastered <b className = "descriptionsection-bold">software principles</b>, running <b className = "descriptionsection-bold">50+ tests</b>, streamlining efficiency and reducing project timeline by <b className = "descriptionsection-bold">1 month</b>
      </>,
      <>
        Created automated script in <b className = "descriptionsection-bold">C++</b> to improve testing efforts, thereby increasing productivity by <b className = "descriptionsection-bold">20%</b> for team processes
      </>,
      <>
        <b className = "descriptionsection-bold">Promoted</b> to Trade Compliance team; Launched efforts in creating <b className = "descriptionsection-bold">LLM</b> using Palantir playground for team efforts
      </>
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "L3Harris Technologies",
    date: "Jun - Sep 2023",
    thumbnail: SoftwareEngineeringInternExperience, 
    skills: ["Python", "FPGAs", "RF Processing", "MATLAB"],
    description: [
      <>
        Coded an <b className = "descriptionsection-bold">audio codec FPGA</b> from scratch using <b>MATLAB</b> and <b>Verilog</b>, reducing <b className = "descriptionsection-bold">15 hours</b> from assigned project timeline
      </>,
      <>
        Formulated a <b className = "descriptionsection-bold">Python script</b> to scrape data from organization database and output key statistics on an Excel sheet, enhancing data accessibility for team and furthering <b className = "descriptionsection-bold">data visualization know-how</b>
      </>
    ]
  },
  {
    title: "Finance Vice President + Pledge Class Finance Chair",
    company: "Alpha Phi Omega, Rho Pi",
    date: "Oct 2023 - Jun 2024",
    thumbnail: APOExperience, 
    skills: ["Finance", "Communication"],
    description: [
      <>
        Managed a budget of approximately <b className = "descriptionsection-bold">$15,000</b> for fraternity chapter
      </>,
      <>
        Advised expenditures for <b className = "descriptionsection-bold">15 events</b> and <b className = "descriptionsection-bold">4 chapter traditions</b>
      </>,
      <>
        Planned and raised a total of <b className = "descriptionsection-bold">$2,210</b> via <b className = "descriptionsection-bold">4 successful fundraising events</b>
      </>,
      <>
        Gave back to the community via <b className = "descriptionsection-bold">15+ service hours</b>
      </>
    ]
  },
  {
    title: "Treasurer",
    company: "Society of Women Engineers",
    date: "Oct 2021 - Jun 2023",
    thumbnail: SWEExperience, 
    skills: ["Leadership", "Financial Management"],
    description: [
      <>
        Raised and managed <b className = "descriptionsection-bold">$45,000</b> for the organization by engaging corporate sponsors
      </>,
      <>
        Advocated for student and sponsor interests by organizing orders for <b className = "descriptionsection-bold">30+ events</b> held by SWE from 2021–2023
      </>,
      <>
        Achieved a <b className = "descriptionsection-bold">20% surplus</b> from projected budget and boosted participation by <b className = "descriptionsection-bold">40%</b> through incentives and firm budgeting
      </>
    ]
  }
];


const Experience: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPlayers = experiences.length;

  const goToNext = () => {
    if (currentIndex < totalPlayers - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  

  return (
    <div id="experience" className="experience-base-container">
      {/* Left Section */}
      <div className="experience-left-section">
        <div className="record-chain">
          {[
            { href: "#introduction", label: "Introduction", img: IntroductionImage },
            { href: "#projects", label: "Projects", img: ProjectsImage },
            { href: "#resume", label: "Resume", img: ResumeImage },
            { href: "#more", label: "More", img: MoreImage },
          ].map(({ href, label, img }, i) => (
            <a href={href} className="record-link" key={i}>
              <div className="vinyl-wrapper">
                <svg viewBox="0 0 100 100" className="curved-text-svg left-arc">
                  <path
                    id={`leftArcPath${i}`}
                    d="M 75,90 A 40,40 0 0,1 75,10"
                    fill="none"
                  />
                  <text>
                    <textPath href={`#leftArcPath${i}`} startOffset="50%" textAnchor="middle">
                      {label}
                    </textPath>
                  </text>
                </svg>
                <img src={img} alt={label} className="record-image" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="experience-right-section">
      <div className={`arrow arrow-left ${currentIndex === 0 ? 'disabled' : ''}`}
        onClick={goToPrev}
      >
        &#10094;
      </div>
        <div className="carousel-wrapper">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${currentIndex * (100 / experiences.length)}%)`,
            width: `${experiences.length * 100}%`,
            display: "flex",
            transition: "transform 0.6s ease-in-out",
          }}
        >

            {experiences.map((exp, i) => {
              return (
                <div
                  key={exp.title}
                  className="experience-slide"
                  style={{
                    width: `${100 / experiences.length}%`,
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ExperiencePlayer
                    title={exp.title}
                    company={exp.company}
                    date={exp.date}
                    thumbnail={exp.thumbnail} 
                    skills={exp.skills}
                    description={exp.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`arrow arrow-right ${currentIndex === totalPlayers - 1 ? 'disabled' : ''}`}
          onClick={goToNext}
        >
          &#10095;
        </div>    
      </div>
    </div>
  );
};

export default Experience;
