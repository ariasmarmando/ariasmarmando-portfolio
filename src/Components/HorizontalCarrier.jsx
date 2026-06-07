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
import CodeAnimation from "./CodeAnimation.jsx";

/* svgs */
import CoffeeMug from "../svg/bmc-logo.svg";
import ResIcon from "../svg/file-lines-regular.svg";
import Linkedin from "../svg/linkedin.svg";
import Github from "../svg/square-github.svg";
// PythonIcon - add src/svg/python.svg to restore
const PythonIcon = null;
// TypeScriptIcon - add src/svg/typescript.svg to restore
const TypeScriptIcon = null;
import JavaScriptIcon from "../svg/square-js.svg";
import JavaIcon from "../svg/java.svg";
import ReactIcon from "../svg/react.svg";
// DockerIcon - add src/svg/docker.svg to restore
const DockerIcon = null;
// GitIcon - add src/svg/git.svg to restore
const GitIcon = null;
// PostgresIcon - add src/svg/postgresql.svg to restore
const PostgresIcon = null;
import SkillsIcon from "../svg/gem-regular.svg";
import rightArrow from "../svg/circle-chevron-right-solid variation.svg";
import guessOrDiePreview from "../images/guessordiePreview.png";
import p1Preview from "../svg/projectPreview.png";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const buttonData = [
  {
    id: "bd1",
    name: "Resume",
    image: ResIcon,
    route:
      "https://docs.google.com/document/d/1q8Dx7SjUzh648pkBNvUpj-1neP2pkOdLYkZL5OttUBw/edit?usp=sharing",
  },
  {
    id: "bd2",
    name: "Certs",
    image: ResIcon,
    route:
      "https://www.credly.com/badges/64440fec-cce9-4e05-9a0c-cff68f238dab/linked_in?t=s0a8nm",
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
  { id: "sk-python",     name: "Python",      image: PythonIcon },
  { id: "sk-ts",         name: "TypeScript",  image: TypeScriptIcon },
  { id: "sk-js",         name: "JavaScript",  image: JavaScriptIcon },
  { id: "sk-java",       name: "Java",        image: JavaIcon },
  { id: "sk-c",          name: "C / C++",     image: null },
  { id: "sk-sql",        name: "SQL",         image: null },
  { id: "sk-react",      name: "React",       image: ReactIcon },
  { id: "sk-fastapi",    name: "FastAPI",     image: null },
  { id: "sk-numpy",      name: "NumPy",       image: null },
  { id: "sk-antspy",     name: "ANTsPy",      image: null },
  { id: "sk-docker",     name: "Docker",      image: DockerIcon },
  { id: "sk-git",        name: "Git",         image: GitIcon },
  { id: "sk-restapi",    name: "REST APIs",   image: null },
  { id: "sk-postgres",   name: "PostgreSQL",  image: PostgresIcon },
  { id: "sk-mysql",      name: "MySQL",       image: null },
];

// Skills used per project — reference by id
const skillMap = Object.fromEntries(skillList.map((s) => [s.id, s]));

const liveProjectData = [
  {
    id: "lp1",
    name: "NeuroStrata",
    desc: "Self-directed internship building an AI-assisted medical imaging platform for exploration of brain MRI datasets and tumor segmentation outputs from ML models. Implemented a Python FastAPI backend to process MRI volumes and generate slice bundles for web visualization. Engineered a Docker microservice architecture separating frontend, backend, and shared imaging data storage. Created REST APIs to discover MRI cases, validate modalities, and generate visualization bundles on demand.",
    img: null, // private project — no preview
    projectLink: null,
    isPrivate: true,
    skills: [
      skillMap["sk-python"],
      skillMap["sk-fastapi"],
      skillMap["sk-docker"],
      skillMap["sk-restapi"],
      skillMap["sk-numpy"],
      skillMap["sk-antspy"],
    ],
  },
  {
    id: "lp2",
    name: "GuessOrDie",
    desc: "Developed a mini-game using JavaScript, React, and CSS. The game takes user input and leverages component reusability and state to generate real-time visual output, providing an engaging and interactive experience that simulates a simplified video game environment.",
    img: guessOrDiePreview,
    projectLink: "https://ariasmarmando.github.io/GuessOrDie/",
    isPrivate: false,
    skills: [
      skillMap["sk-js"],
      skillMap["sk-react"],
    ],
  },
  {
    id: "lp3",
    name: "Portfolio",
    desc: "Designed a responsive portfolio using Figma and implemented it with React and JavaScript. Built reusable components with CSS for a stylish, unique design that accurately follows initial wireframes and prototypes. Features a horizontal scroll layout on landscape viewports and vertical scroll on portrait viewports.",
    img: p1Preview,
    projectLink: "https://armandoarias.me",
    isPrivate: false,
    skills: [
      skillMap["sk-js"],
      skillMap["sk-react"],
    ],
  },
];

// ---------------------------------------------------------------------------
// Form config
// ---------------------------------------------------------------------------

const buildFormInputs = (emailValue) => [
  {
    id: "firstName",
    type: "text",
    name: "firstName",
    placeholder: "First Name",
    errorMessage: "Please tell me your first name",
    style: "stack3",
    required: true,
  },
  {
    id: "lastName",
    type: "text",
    name: "lastName",
    placeholder: "Last Name",
    errorMessage: "Please tell me your last name",
    style: "stack3",
    required: true,
  },
  {
    id: "fromCompany",
    type: "text",
    name: "fromCompany",
    placeholder: "Company / Organization (optional)",
    errorMessage: "",
    style: "stack3",
  },
  {
    id: "email",
    type: "email",
    name: "email",
    placeholder: "Email",
    errorMessage: "Please enter a valid email address",
    style: "stack2",
    required: true,
  },
  {
    id: "confirmEmail",
    type: "email",
    name: "confirmEmail",
    placeholder: "Confirm Email",
    errorMessage: "Email address does not match",
    style: "stack2",
    required: true,
    pattern: emailValue,
  },
  {
    id: "phoneNumber",
    type: "text",
    name: "phoneNumber",
    placeholder: "Phone Number (optional)",
    errorMessage: "Please enter a valid phone number",
    style: "stack2",
    pattern: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
  },
  {
    id: "message",
    type: "text",
    name: "message",
    placeholder: "Write a message",
    errorMessage: "Please use at least 10 characters.",
    style: "stack1",
    required: true,
    pattern: "^.{10,}$",
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

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

  const [displayMsg1, setDisplayMsg1] = useState(false);
  const [displayMsg2, setDisplayMsg2] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setDisplayMsg1(true);
          setTimeout(() => setDisplayMsg1(false), 2500);
          setTimeout(() => window.location.reload(), 3000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setDisplayMsg2(true);
          setTimeout(() => setDisplayMsg2(false), 5000);
        }
      );
  };

  const onChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formInputs = buildFormInputs(formValues.email);
  const { scrollLocation } = props;

  return (
    <div className="elements-carrier">

      {/* ── HOME ── */}
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
          <a target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/ariasmarmando">
            <img src={CoffeeMug} alt="Buy me a coffee" />
          </a>
        </div>
        {/* Code animation panel — portrait only, hidden in landscape via CSS */}
        <div className="home-code-animation">
          <CodeAnimation />
        </div>
      </div>

      {/* ── ABOUT ME ── */}
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
            I am a Computer scientist and Software Engineer early in my career, but not early in the way I think about software. My approach is to tackle problems from first principles,  building clean, responsive frontends and designing the backend logic that supports them. I care about code that's readable, systems that scale reasonably, and shipping things that actually work.
          </span>
        </div>

        <div className="icons-buttons">
          <div id="bio-title1">
            <span id="bio-title">More about me:</span>
          </div>
          <div id="link-buttons-positioner">
            {buttonData.map((btn) => (
              <IconButtons
                key={btn.id}
                buttonName={btn.name}
                iconIMG={btn.image}
                buttonRoute={btn.route}
              />
            ))}
          </div>
        </div>

        <div className={scrollLocation === 2 ? "skills-section" : "none"}>
          <div id="bio-title1">
            <span id="bio-slash">// </span>
            <span id="bio-title">Programming Languages<br />and Technologies</span>
          </div>
          <div id="skills-section-skills">
            <div className="title-icon">
              <img src={SkillsIcon} alt="" />
            </div>
            <div id="skillList">
              {skillList.map((skill) => (
                <Skill
                  key={skill.id}
                  id={skill.id}
                  skillName={skill.name}
                  iconIMG={skill.image}
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
            <ScrollTo name="SEE MORE" whereTo={props.scrollMeTo("home")} img={rightArrow} />
          </div>
          <ScrollTo name="SEE MORE" whereTo={props.scrollMeTo("projects")} img={rightArrow} />
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <div id="projects" className="spaceBlock">
        <div className="hidPOS">
          <HID
            pfp={props.pfp}
            name={props.name}
            title1={props.title1}
            title2={props.title2}
            scrollLocation={scrollLocation}
          />
        </div>
        <div id="projects-content">
          <div id="bio-title1">
            <span id="bio-slash">// </span>
            <span id="bio-title">Projects</span>
          </div>
          <div id="projects-component">
            {liveProjectData.map((project) => (
              <LiveProjects
                key={project.id}
                id={project.id}
                img={project.img}
                skillObject={project.skills}
                title={project.name}
                desc={project.desc}
                projectLink={project.projectLink}
                isPrivate={project.isPrivate}
              />
            ))}
          </div>
          <div id="nav2">
            <span>Navigate</span>
          </div>
          <div className="formMeButton">
            <div id="goBack">
              <ScrollTo name="SEE MORE" whereTo={props.scrollMeTo("aboutMe")} img={rightArrow} />
            </div>
            <ScrollTo name="SEE MORE" whereTo={props.scrollMeTo("contact")} img={rightArrow} />
          </div>
        </div>
      </div>

      {/* ── CONTACT ── */}
      <div id="contact" className="spaceBlock">
        <div className={displayMsg1 ? "msgReceived" : "msgReceived-off"}>
          <span>Your message has been sent</span>
        </div>
        <div className={displayMsg2 ? "msgNotReceived" : "msgReceived-off"}>
          <span>Message not sent — please try again</span>
        </div>

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
                onChange={onChange}
              />
            ))}
            <button type="submit">
              SUBMIT
              <img src={rightArrow} alt="" />
            </button>
          </form>
        </div>

        <div id="scrollHome">
          <ScrollTo name="Home" whereTo={props.scrollMeTo("home")} img={rightArrow} />
        </div>
      </div>

    </div>
  );
};

export default HorizontalCarrier;
