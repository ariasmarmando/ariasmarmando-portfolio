import "../CSS/projectsComponent.css";
import Skill from "./Skill";

const LiveProjects = (props) => {
  const skillVar = props.skillObject;
  return (
    <div className="project-grid" id={props.id}>
      <div id="project-img-section">
        <div id="img-container"></div>
      </div>
      <div id="project-desc-container">
        <div id="section-title">
          <span id="title-dec">// </span>
          <span>Project Name: {props.title}</span>
        </div>
        <div id="section-desc">
          <span id="description">{props.desc}</span>
        </div>
      </div>
      <div id="project-skills-container">
        <div id="section-title">
          <span id="title-dec">// </span>
          <span>Created With</span>
        </div>
        <div id="skillList">
          <div id="ind-skill">
            {skillVar.map((skillVar) => (
              <Skill
                key={skillVar.id}
                id={skillVar.id}
                skillName={skillVar.name}
                iconIMG={skillVar.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveProjects;
