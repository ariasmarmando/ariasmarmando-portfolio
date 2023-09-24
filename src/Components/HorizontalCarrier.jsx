import { useState } from "react";
/* CSS */
import "../CSS/HCarrier.css";

/* Components */
import IDCard from "./IDCard.jsx";
import HomeAnimation from "./HomeAnimation.jsx";
import ScrollTo from "./ScrollTo.jsx";
import HID from "./HID.jsx";
import IconButtons from "./IconButtons.jsx";
import Skill from "./Skill.jsx";
import LiveProjects from "./LiveProjects";

/* svgs */
import CoffeeMug from "../svg/mug-hot-solid.svg";
import ResIcon from "../svg/file-lines-regular.svg";
import Linkedin from "../svg/linkedin.svg";
import Github from "../svg/square-github.svg";
import JavaScripticon from "../svg/square-js.svg";
import Reacticon from "../svg/react.svg";
import HTMLicon from "../svg/html5.svg";
import CSSicon from "../svg/css3-alt.svg";
import Figmaicon from "../svg/figma.svg";
import IllustratorIcon from "../svg/bezier-curve-solid.svg";
import Photoshopicon from "../svg/image-solid.svg";
import SkillsIcon from "../svg/gem-regular.svg";
import ArrowUp from "../svg/chevron-up-solid.svg/";
import ArrowDown from "../svg/chevron-down-solid.svg/";
import p1Preview from "../svg/projectPreview.png";

/* This data needs to be placed inside of a contex API later */
const buttonData = [
  {
    id: "bd1",
    name: "Resume",
    image: ResIcon,
    route: null,
  },
  {
    id: "bd2",
    name: "Certs",
    image: ResIcon,
    route: null,
  },
  {
    id: "bd3",
    name: "LinkedIn",
    image: Linkedin,
    route: null,
  },
  {
    id: "bd4",
    name: "Github",
    image: Github,
    route: null,
  },
];

const skillList = [
  {
    id: "sk1",
    name: "JavaScript",
    image: JavaScripticon,
  },
  {
    id: "sk2",
    name: "React.js",
    image: Reacticon,
  },
  {
    id: "sk3",
    name: "HTML",
    image: HTMLicon,
  },
  {
    id: "sk4",
    name: "CSS",
    image: CSSicon,
  },
  {
    id: "sk5",
    name: "Figma",
    image: Figmaicon,
  },
  {
    id: "sk6",
    name: "Illustrator",
    image: IllustratorIcon,
  },
  {
    id: "sk7",
    name: "Photoshop",
    image: Photoshopicon,
  },
  {
    id: "sk8",
    name: "placeholder",
    image: null,
  },
  {
    id: "sk9",
    name: "placeholder",
    image: null,
  },
  {
    id: "sk10",
    name: "placeholder",
    image: null,
  },
  {
    id: "sk11",
    name: "placeholder",
    image: null,
  },
  {
    id: "sk12",
    name: "placeholder",
    image: null,
  },
  {
    id: "sk13",
    name: "placeholder",
    image: null,
  },
  {
    id: "sk14",
    name: "placeholder",
    image: null,
  },
];

const liveProjectData = [
  {
    id: "lp1",
    name: "Portfolio",
    desc: "Project Description goes here.",
    img: p1Preview,
    skills: [
      { ...skillList[0] },
      { ...skillList[1] },
      { ...skillList[2] },
      { ...skillList[3] },
      { ...skillList[4] },
      { ...skillList[5] },
    ],
  },
  {
    id: "lp2",
    name: "Placeholer",
    desc: "Project Description goes here.",
    skills: [{ ...skillList[0] }, { ...skillList[1] }, { ...skillList[2] }],
  },
];

const HorizontalCarrier = (props) => {
  return (
    <div className="elements-carrier">
      <div id="home" className="spaceBlock">
        <IDCard
          pfp={props.pfp}
          name={props.name}
          title1={props.title1}
          title2={props.title2}
        />
        <div id="homeAnimation">
          <HomeAnimation />
        </div>
        <div className="aboutMeButton">
          <ScrollTo name="About Me" whereTo={props.scrollMeTo("aboutMe")} />
        </div>
        <div className="coffee-button">
          <img src={CoffeeMug} />
        </div>
      </div>

      <div id="aboutMe" className="spaceBlock">
        <HID
          pfp={props.pfp}
          name={props.name}
          title1={props.title1}
          title2={props.title2}
        />
        <div className="bio-section">
          <div id="bio-title1">
            <span id="bio-slash">// </span>
            <span id="bio-title">Get to know me</span>
          </div>
          <span id="bio-bio">
            Programming since the age of 15, when I first fell in love with the
            freedom that one obtains when you learn to speak the language of
            computers and the web. I am a Front-End certified web developer,
            currently pursuing a Bachelor's in Computer Science. I enjoy
            collaborating with teammates to develop stunning and accessible
            solutions.
          </span>
        </div>
        <div className="icons-buttons">
          <div id="bio-title1">
            <span id="bio-title">More of me</span>
          </div>
          <div id="link-buttons-positioner">
            {buttonData.map((buttonData) => (
              <IconButtons
                key={buttonData.id}
                buttonName={buttonData.name}
                iconIMG={buttonData.image}
                buttonRoute={buttonData.route}
              />
            ))}
          </div>
        </div>
        <div className="skills-section">
          <div id="bio-title1">
            <span id="bio-slash">// </span>
            <span id="bio-title">Skills</span>
          </div>
          <div id="skills-section-skills">
            <div className="title-icon">
              <img src={SkillsIcon} />
            </div>
            <div id="skillList">
              {skillList.map((skillList) => (
                <Skill
                  key={skillList.id}
                  id={skillList.id}
                  skillName={skillList.name}
                  iconIMG={skillList.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="spaceBlock">
        <div id="projects-content">
          <div id="bio-title1">
            <span id="bio-slash">// </span>
            <span id="bio-title">Live Projects</span>
          </div>
          <div id="projects-component">
            {liveProjectData.map((liveProjectData) => (
              <LiveProjects
                key={liveProjectData.id}
                id={liveProjectData.id}
                img={liveProjectData.img}
                skillObject={liveProjectData.skills}
                title={liveProjectData.name}
                desc={liveProjectData.desc}
              />
            ))}
          </div>
          <div className="projectScroller">
            <div id="scrollDown" onClick={props.scrollMeTo("lp2")}>
              <img src={ArrowDown} />
            </div>
            <div id="scrollUp" onClick={props.scrollMeTo("lp1")}>
              <img src={ArrowUp} />
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="spaceBlock"></div>
    </div>
  );
};
export default HorizontalCarrier;
