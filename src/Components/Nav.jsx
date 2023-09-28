import "../CSS/ScreenL-Nav-Main.css";
import linkedInButton from "../svg/linkedin.svg";
import githubButton from "../svg/square-github.svg";
const Nav = (props) => {
  return (
    <div className="Nav-Container">
      <span className="nav-title">
        <a onClick={props.clickHandle("home")}>Portfolio</a>
      </span>
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
          <li>
            <a
              className={props.sliderLocator == 1 ? "active" : ""}
              onClick={props.clickHandle("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={props.sliderLocator == 2 ? "active" : ""}
              onClick={props.clickHandle("aboutMe")}
            >
              About me
            </a>
          </li>
          <li>
            <a
              className={props.sliderLocator == 3 ? "active" : ""}
              onClick={props.clickHandle("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={props.sliderLocator == 4 ? "active" : ""}
              onClick={props.clickHandle("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
