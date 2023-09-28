import { useState } from "react";
import "../CSS/skills.css";
const Skills = (props) => {
  var delayInMilliseconds = Math.floor(Math.random() * 4000); //1 second
  const [hideMe, setHideMe] = useState(true);
  setTimeout(function () {
    setHideMe(false);
  }, delayInMilliseconds);

  return (
    <div
      className={props.skillName == "placeholder" ? "Skills-none" : "Skills"}
    >
      <img id={hideMe == false ? "here" : "notHere"} src={props.iconIMG} />
      <span id={hideMe == false ? "here" : "notHere"}>{props.skillName}</span>
    </div>
  );
};
export default Skills;
