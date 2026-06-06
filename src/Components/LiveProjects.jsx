import "../CSS/projectsComponent.css";
import Skill from "./Skill";

const LiveProjects = ({ id, img, title, desc, skillObject, projectLink, isPrivate }) => {
  return (
      <div className="project-grid" id={id}>

        <div className="project-img-section">
          <div>
            {isPrivate || !projectLink ? (
                <div className="img-container img-container--private">
                  <span className="private-label">// Private Repository</span>
                </div>
            ) : (
                <a className="img-container" href={projectLink} target="_blank" rel="noreferrer">
                  <img src={img} alt={`${title} preview`} />
                </a>
            )}
          </div>
        </div>

        <div className="project-desc-container">
          <div className="project-section-title">
            <span className="title-dec">// </span>
            <span>Project: {title}</span>
          </div>
          <div className="project-section-desc">
            <div className="description">
              <span>{desc}</span>
            </div>
          </div>
        </div>

        <div className="project-skills-container">
          <div className="project-section-title">
            <span className="title-dec">// </span>
            <span>Built With</span>
          </div>
          <div className="project-skill-list">
            <div className="ind-skill">
              {skillObject.map((skill) => (
                  <Skill
                      key={skill.id}
                      id={skill.id}
                      skillName={skill.name}
                      iconIMG={skill.image}
                  />
              ))}
            </div>
          </div>
          {!isPrivate && projectLink && (
              <a
                  className="project-live-link"
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
              >
                View Live →
              </a>
          )}
        </div>

      </div>
  );
};

export default LiveProjects;