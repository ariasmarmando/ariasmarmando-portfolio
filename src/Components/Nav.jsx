import "../CSS/ScreenL-Nav-Main.css";
import linkedInButton from "../svg/linkedin.svg";
import githubButton from "../svg/square-github.svg";
const Nav = () => {
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
          <li>Home</li>
          <li>About me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
