import "../CSS/skills.css";
const Skills = (props) => {
  return (
    <div
      className={props.skillName == "placeholder" ? "Skills-none" : "Skills"}
    >
      <img src={props.iconIMG} />
      <span>{props.skillName}</span>
    </div>
  );
};
export default Skills;
