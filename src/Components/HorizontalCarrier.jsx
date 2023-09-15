import "../CSS/HCarrier.css";
import IDCard from "./IDCard";

const HorizontalCarrier = () => {
  return (
    <div className="elements-carrier">
      <div id="home" className="spaceBlock">
        <IDCard />
      </div>
      <div id="aboutMe" className="spaceBlock"></div>
      <div id="projects" className="spaceBlock"></div>
      <div id="contact" className="spaceBlock"></div>
    </div>
  );
};
export default HorizontalCarrier;
