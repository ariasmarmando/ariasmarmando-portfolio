import "../CSS/HCarrier.css";
import IDCard from "./IDCard";
import HomeAnimation from "./homeAnimation";
import ScrollTo from "./ScrollTo.jsx";

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
      </div>
      <div id="aboutMe" className="spaceBlock"></div>
      <div id="projects" className="spaceBlock"></div>
      <div id="contact" className="spaceBlock"></div>
    </div>
  );
};
export default HorizontalCarrier;
