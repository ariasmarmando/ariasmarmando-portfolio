import "../CSS/ScreenL-Nav-Main.css";
import linkedInButton from "../svg/linkedin.svg";
import githubButton from "../svg/square-github.svg";
const Nav = (props) => {
  return (
    <div className="Nav-Container">
      <p className="nav-title">Portfolio</p>
      <div className="nav-links">
        <a href="https://github.com/ariasmarmando">
          <img src={githubButton} />
        </a>
        <a href="https://linkedin.com/in/ariasmarmando">
          <img src={linkedInButton} />
        </a>
      </div>
      <div className="nav">
        <ul>
          <a onClick={props.clickHandle("home")}>
            <li>Home</li>
          </a>
          <a onClick={props.clickHandle("aboutMe")}>
            <li>About me</li>
          </a>
          <a onClick={props.clickHandle("projects")}>
            <li>Projects</li>
          </a>
          <a onClick={props.clickHandle("contact")}>
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
