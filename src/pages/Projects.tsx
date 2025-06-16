import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "../styles/Projects.css";
import LinerarNonlinear from '../images/LinearNonLinear.png';
import SupervisedMachineLearning from '../images/SupervisedMachineLearning.png';
import YelpRedesign from '../images/YelpRedesign.png';
import PersonalPortfolio from '../images/PersonalPortfolioV1.png';
import ReGen from '../images/ReGen.png';
import SHA256 from '../images/SHA256.png';
import DataScience from '../images/DataScience.png';
import SWEWebsite from '../images/SWEWebsite.png';


const projectData = [
  {
    title: "Personal Portfolio V1",
    role: "Solo Personal Project",
    year: 2024,
    image: PersonalPortfolio,
    link: "https://angkitha.github.io/Portfolio/",
    details: [
      <>
        Coded first portfolio page from scratch using strong <b className = "projectDataDetails-bold">Typescript</b>, <b className = "projectDataDetails-bold">React</b>, and <b className = "projectDataDetails-bold">HTML/CSS</b> knowledge
      </>,
      <>
        Employed <b>UI/UX</b> know-how and devised <b>Figma prototype</b> and replicated draft using code
      </>
    ]
  },
  {
    title: "ReGen",
    role: "Solo Personal Project",
    year: 2024,
    image: ReGen,
    link: "https://github.com/angkitha/ReGen/tree/master",
    details: [
      <>
        Mastered coding using <b>Typescript</b>, <b className = "projectDataDetails-bold">Vite</b>, and <b>React</b> to create website interface that allows users to input edible ingredients and generate a <b>recipe</b>
      </>,
      <>
        Gained experience with <b className = "projectDataDetails-bold">API usage</b>, <b>Spoonacular</b> and <b className = "projectDataDetails-bold">full stack programming</b>
      </>,
      <>
        Added <b>animation</b> to text and website background for <b className = "projectDataDetails-bold">UX interactivity</b>
      </>
    ]
  },
  {
    title: "Linear & Non-Linear Optimization",
    role: "Solo Project",
    year: 2024,
    image: LinerarNonlinear,
    link: "https://docs.google.com/document/d/1TGO8-8k8AyiX58cIeiD2_9E_1Ch3GcJ9Y0KJY2k-3sI/edit?tab=t.0",
    details: [
      <>
        Constructed a <b className = "projectDataDetails-bold">multi-class classifier</b> from scratch using knowledge of <b className = "projectDataDetails-bold">linear algebra</b>
      </>,
      <>
        Trained classifier on MNIST dataset and coded using <b className = "projectDataDetails-bold">Python</b>; reached <b className = "projectDataDetails-bold">70% accuracy</b> under <b>2 day</b> deadline
      </>,
      <>
        Was explicitly granted additional points for extensive research on <b>image classification</b>
      </>
    ]
  },
  {
    title: "Supervised Machine Learning",
    role: "Project Lead",
    year: 2023,
    image: SupervisedMachineLearning,
    link: "https://github.com/COGS118A/Group003-Wi23/blob/main/FinalProjectGroup003-Wi23.ipynb",
    details: [
      <>
        Spearheaded group as <b>project manager</b>. Analyzed data on past earthquakes using <b className = "projectDataDetails-bold">PyTorch</b> and cleaned data for <b className = "projectDataDetails-bold">exploratory data analysis</b>
      </>,
      <>
        Devised <b className = "projectDataDetails-bold">interactive decision tree</b> and <b className = "projectDataDetails-bold">regression tree model</b> to predict the magnitude of future earthquakes
      </>,
      <>
        Achieved <b className = "projectDataDetails-bold">81% accuracy</b>
      </>
    ]
  },
  {
    title: "A Healthier Look at Yelp",
    role: "Project Member",
    year: 2023,
    image: YelpRedesign,
    link: "https://medium.com/@aanguraj/a-healthier-look-at-yelp-8c06c42d1f5c",
    details: [
      <>
        Used <b className = "projectDataDetails-bold">Figma</b> to craft 2 low fidelity and <b>1 high fidelity prototype</b>
      </>,
      <>
        Conducted <b className = "projectDataDetails-bold">UI/UX research</b> to understand core demographic; improved upon design using feedback
      </>,
      <>
        Crafted <b>professional case study</b>
      </>
    ]
  },
  {
    title: "SHA 256 and Bitcoin Hashing Project",
    role: "Project Lead",
    year: 2022,
    image: SHA256,
    link: "https://docs.google.com/document/d/1wY4LWqjS6ekqK--Lau9Lz6hPC7AxUaH5nt_PEFgNE90/edit?tab=t.0",
    details: [
      <>
        Utilized knowledge of <b className = "projectDataDetails-bold">FPGAs</b> and <b className = "projectDataDetails-bold">VerilogHDL</b> to spearhead the redesign of the <b>SHA 256 algorithm</b>
      </>,
      <>
        Delivered project under 2 week deadline, demonstrated strong technical know-how via <b>clean and well structured code</b>
      </>
    ]
  },
  {
    title: "Data Science in Practice Project",
    role: "Project Lead",
    year: 2022,
    image: DataScience,
    link: "https://github.com/angkitha/COGS108FinalProject/blob/Clean-Median-Household-Income-Data/FinalProjectGroup_025-Fa22.ipynb",
    details: [
      <>
        Led and performed <b>exploratory data analysis</b> using <b className = "projectDataDetails-bold">Jupyter Notebook</b> and well known <b className = "projectDataDetails-bold">Python libraries</b>
      </>,
      <>
        Produced <b className = "projectDataDetails-bold">inferential analysis</b> using <b className = "projectDataDetails-bold">OLS Regression</b> on relationships between housing prices, college admissions, and college ranking
      </>,
      <>
        Personally earned team <b>5 bonus points</b> for extensive work and detail organization
      </>
    ]
  },
  {
    title: "Society of Women Engineers Website",
    role: "Project Member",
    year: 2021,
    image: SWEWebsite,
    link: "https://swe-ucsd.netlify.app/",
    details: [
      <>
        Used <b>Figma</b>, <b>VSC</b> for <b className = "projectDataDetails-bold">HTML/CSS</b>, <b className = "projectDataDetails-bold">Github</b>, <b>React</b>, and .json files to create the <b>'About'</b> and <b>'Project Team'</b> sections of the SWE website
      </>,
      <>
        Completed project under 7 week deadline while learning about <b className = "projectDataDetails-bold">version control</b> and core <b>framework principles</b>
      </>
    ]
  },
];


const Projects: React.FC = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(window.innerWidth <= 768 ? 360 : 432);
  const isMobile = window.innerWidth <= 768;


  useLayoutEffect(() => {
    const updateLineHeight = () => {
      if (bannerRef.current) {
        const topOffset = bannerRef.current.offsetTop;
        setLineHeight(topOffset);
      }
    };

    const handleResize = () => {
      setCardWidth(window.innerWidth <= 768 ? 400 : 432);
      updateLineHeight();
    };    

    updateLineHeight();
    window.addEventListener("resize", updateLineHeight);
    return () => window.removeEventListener("resize", updateLineHeight);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  
const handlePrev = () => {
  setCurrentIndex((prev) => Math.max(0, prev - 1));
};

const handleNext = () => {
  setCurrentIndex((prev) => {
    const maxIndex = isMobile ? projectData.length - 1 : projectData.length - 2;
    return prev >= maxIndex ? 0 : prev + 1;
  });
};

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  

  return (
    <div className="projects-page">

      <div className="hanging-line-left" style={{ height: lineHeight }} />
      <div className="hanging-line-right" style={{ height: lineHeight }} />

      <div className="repeated-title">
        PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
      </div>

      <div className="banner-wrapper" ref={bannerRef}>
        <nav className="section-nav">
          <span onClick={() => scrollToSection("introduction")}>INTRODUCTION</span>
          <span onClick={() => scrollToSection("experience")}>EXPERIENCE</span>
          <span onClick={() => scrollToSection("resume")}>RESUME</span>
          <span onClick={() => scrollToSection("more")}>MORE</span>
        </nav>
      </div>

      <div className="carousel-container">
        <button
          className="arrow"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ❮
        </button>

        <div
          className="carousel-viewport"
          style={{
            width: `${(window.innerWidth <= 768 ? cardWidth : 2 * cardWidth)}px`,
          }}
        >

          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth)}px)`,
            }}
          >
            {projectData.map((project, index) => (
              <a
                className="carousel-card"
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-placeholder">
                  <img src={project.image} alt={project.title} className="project-placeholder-image" />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.role} | {project.year}</p>
                  <ul>
                    {project.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </a>
            
            ))}
          </div>

        </div>

        <button
          className="arrow "
          onClick={handleNext}
          disabled={currentIndex + 2 >= projectData.length}
        >
          ❯
        </button>
      </div>

    </div>
  );
};

export default Projects;
