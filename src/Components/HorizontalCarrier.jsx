import "../CSS/HCarrier.css";
import IDCard from "./IDCard";
import HomeAnimation from "./homeAnimation";
import ScrollTo from "./ScrollTo.jsx";
import CoffeeMug from "../svg/mug-hot-solid.svg";
import HID from "./HID.jsx";
import IconButtons from "./IconButtons.jsx";
import ResIcon from "../svg/file-lines-regular.svg";
import Linkedin from "../svg/linkedin.svg";
import Github from "../svg/square-github.svg";

const buttonData = [
  {
    id: 1,
    name: "Resume",
    image: ResIcon,
    route: null,
  },
  {
    id: 2,
    name: "Certs",
    image: ResIcon,
    route: null,
  },
  {
    id: 3,
    name: "LinkedIn",
    image: Linkedin,
    route: null,
  },
  {
    id: 4,
    name: "Github",
    image: Github,
    route: null,
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

      <div id="projects" className="spaceBlock"></div>
      <div id="contact" className="spaceBlock"></div>
    </div>
  );
};
export default HorizontalCarrier;
