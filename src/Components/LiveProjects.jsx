import "../CSS/projectsComponent.css";
import Skill from "./Skill";

const LiveProjects = ({ id, img, title, desc, skillObject }) => {
  return (
    <div className="project-grid" id={id}>
      <div id="project-img-section">
        <div id="img-container">
          <img src={img} />
        </div>
      </div>
      <div id="project-desc-container">
        <div id="section-title">
          <span id="title-dec">// </span>
          <span>Project Name: {title}</span>
        </div>
        <div id="section-desc">
          <div id="description">
            <span>{desc}</span>
          </div>
        </div>
      </div>
      <div id="project-skills-container">
        <div id="section-title">
          <span id="title-dec">// </span>
          <span>Created With</span>
        </div>
        <div id="skillList">
          <div id="ind-skill">
            {skillObject.map((skillObject) => (
              <Skill
                key={skillObject.id}
                id={skillObject.id}
                skillName={skillObject.name}
                iconIMG={skillObject.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveProjects;
