import "../CSS/projectsComponent.css";

const LiveProjects = () => {
  return (
    <div className="project-grid">
      <div id="project-img-section">
        <div id="img-container"></div>
      </div>
      <div id="project-desc-container">
        <span id="section-title">Portfolio</span>
        <span id="section-desc">Desc here</span>
      </div>
      <div id="project-skills-container">
        <span id="section-title">Created with:</span>
        <div id="skillList"></div>
      </div>
    </div>
  );
};

export default LiveProjects;
