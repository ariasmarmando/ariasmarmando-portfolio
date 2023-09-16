import "../CSS/HCarrier.css";
import IDCard from "./IDCard";
import IDimage from "../images/PFP3.png";
import HomeAnimation from "./homeAnimation";
const personalData = {
  pfp: IDimage,
  name: "Armando Arias",
  title1: "Front-End Developer",
  title2: "UX / UI Designer",
};

const HorizontalCarrier = () => {
  return (
    <div className="elements-carrier">
      <div id="home" className="spaceBlock">
        <IDCard
          pfp={personalData.pfp}
          name={personalData.name}
          title1={personalData.title1}
          title2={personalData.title2}
        />
        <div id="homeAnimation">
          <HomeAnimation />
        </div>
      </div>
      <div id="aboutMe" className="spaceBlock"></div>
      <div id="projects" className="spaceBlock"></div>
      <div id="contact" className="spaceBlock"></div>
    </div>
  );
};
export default HorizontalCarrier;
