import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
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
import ContactForm from "./ContactForm";

/* svgs */
import CoffeeMug from "../svg/bmc-logo.svg";
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
import rightArrow from "../svg/circle-chevron-right-solid variation.svg";
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
    route: "https://www.linkedin.com/in/ariasmarmando/",
  },
  {
    id: "bd4",
    name: "Github",
    image: Github,
    route: "https://github.com/ariasmarmando",
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
    desc: "My personal portfolio is a single-page application developed in React.js + vite to showcase my skills and other projects.",
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

/*Form Data */

const HorizontalCarrier = (props) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    fromCompany: "",
    email: "",
    confirmEmail: "",
    phoneNumber: "",
    message: "",
  });

  const formInputs = [
    {
      id: 1,
      type: "text",
      name: "firstName",
      placeholder: "First Name",
      errorMessage: "Please tell me your first name",
      label: "First Name",
      style: "stack3",
      required: true,
    },
    {
      id: 2,
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
      errorMessage: "Please tell me your last name",
      label: "Last Name",
      style: "stack3",
      required: true,
    },
    {
      id: 3,
      type: "text",
      name: "fromCompany",
      placeholder: "Company / Organization (optional)",
      errorMessage: "",
      label: "Company / Organization (optional)",
      style: "stack3",
    },
    {
      id: 4,
      type: "email",
      name: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      label: "Email",
      style: "stack2",
      required: true,
    },
    {
      id: 5,
      type: "email",
      name: "confirmEmail",
      placeholder: "Confirm Email",
      errorMessage: "Email address does not match",
      label: "Confirm Email",
      style: "stack2",
      required: true,
      pattern: formValues.email,
    },
    {
      id: 6,
      type: "text",
      name: "phoneNumber",
      placeholder: "Phone Number (optional)",
      errorMessage: "Please enter a valid phone number",
      label: "Phone Number",
      style: "stack2",
      pattern: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
    },
    {
      id: 7,
      type: "text",
      name: "message",
      placeholder: "Write a message",
      errorMessage:
        "Please tell me how I can help you! use at least 10 characters.",
      label: "Write a message",
      style: "stack1",
      required: true,
      pattern: "^.{10,}$",
    },
  ];

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_so1xuwe",
        "template_g9qwjvj",
        form.current,
        "J8bJLsRhXgEuX4q1j"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormValues({
      firstName: "",
      lastName: "",
      fromCompany: "",
      email: "",
      confirmEmail: "",
      phoneNumber: "",
      message: "",
    });
  };

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const scrollLocation = props.scrollLocation;

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
          <div id="nav2">
            <span>Navigate</span>
          </div>
          <ScrollTo
            name="SEE MORE"
            whereTo={props.scrollMeTo("aboutMe")}
            img={rightArrow}
          />
        </div>
        <div className="coffee-button">
          <a href="https://www.buymeacoffee.com/ariasmarmando">
            {" "}
            <img src={CoffeeMug} />
          </a>
        </div>
      </div>

      <div id="aboutMe" className="spaceBlock">
        <div className="hidPOS">
          <HID
            pfp={props.pfp}
            name={props.name}
            title1={props.title1}
            title2={props.title2}
            scrollLocation={scrollLocation}
          />
        </div>

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
        <div className={props.scrollLocation == 2 ? "skills-section" : "none"}>
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
        <div id="nav2">
          <span>Navigate</span>
        </div>
        <div className="projectsMeButton">
          <div id="goBack">
            {" "}
            <ScrollTo
              name="SEE MORE"
              whereTo={props.scrollMeTo("home")}
              img={rightArrow}
            />
          </div>
          <ScrollTo
            name="SEE MORE"
            whereTo={props.scrollMeTo("projects")}
            img={rightArrow}
          />
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
          <div id="nav2">
            <span>Navigate</span>
          </div>
          <div className="formMeButton">
            <div id="goBack">
              <ScrollTo
                name="SEE MORE"
                whereTo={props.scrollMeTo("aboutMe")}
                img={rightArrow}
              />
            </div>
            <ScrollTo
              name="SEE MORE"
              whereTo={props.scrollMeTo("contact")}
              img={rightArrow}
            />
          </div>
        </div>
      </div>

      <div id="contact" className="spaceBlock">
        <div id="contact-content-title">
          <div id="bio-title1">
            <span id="bio-slash"> &#91; </span>
            <span id="bio-title">Let's Work Together!</span>
            <span id="bio-slash"> &#93; </span>
          </div>
        </div>
        <div id="contact-content-form">
          <form ref={form} onSubmit={handleSubmit} id="form-container">
            {formInputs.map((input) => (
              <ContactForm
                key={input.id}
                value={formValues[input.name]}
                {...input}
                style={input.style}
                type={input.type}
                placeholder={input.placeholder}
                onChange={onChange}
              />
            ))}
            <button>
              SUBMIT
              <img src={rightArrow} />
            </button>
          </form>
        </div>
        <div id="scrollHome">
          <ScrollTo
            name="Home"
            whereTo={props.scrollMeTo("home")}
            img={rightArrow}
          />
        </div>
      </div>
    </div>
  );
};
export default HorizontalCarrier;
