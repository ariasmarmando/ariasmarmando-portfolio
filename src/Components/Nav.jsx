import "../CSS/ScreenL-Nav-Main.css";
import linkedInButton from "../svg/linkedin.svg";
import githubButton from "../svg/square-github.svg";
const Nav = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
    window.history.pushState({}, "", id);
  };

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
          <a onClick={handleClick("home")}>
            <li>Home</li>
          </a>
          <a onClick={handleClick("aboutMe")}>
            <li>About me</li>
          </a>
          <a onClick={handleClick("projects")}>
            <li>Projects</li>
          </a>
          <a onClick={handleClick("contact")}>
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
