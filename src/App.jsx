import "./CSS/screenL-main.css";
import Nav from "./Components/Nav";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import IDimage from "./images/PFP3.png";
import { useState } from "react";

function App() {
  const [locIndex, setlocIndex] = useState(1);
  const personalData = {
    pfp: IDimage,
    name: "Armando Arias",
    title1: "Front-End Developer",
    title2: "UX / UI Designer",
  };

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
    if (id == "home") {
      setlocIndex(1);
    } else if (id == "aboutMe") {
      setlocIndex(2);
    } else if (id == "projects") {
      setlocIndex(3);
    } else if (id == "contact") {
      setlocIndex(4);
    }
  };

  function scrollerClickf() {
    if (locIndex == 1) {
      return handleClick("aboutMe");
    } else if (locIndex == 2) {
      return handleClick("projects");
    } else if (locIndex == 3) {
      return handleClick("contact");
    }
  }
  function scrollerClickb() {
    if (locIndex == 2) {
      return handleClick("home");
    } else if (locIndex == 3) {
      return handleClick("aboutMe");
    } else if (locIndex == 4) {
      return handleClick("projects");
    }
  }

  return (
    <div className="screenL-skeleton-container">
      <Nav
        sliderLocator={locIndex}
        clickHandle={(props) => handleClick(`${props}`)}
      />
      <Body
        pfp={personalData.pfp}
        name={personalData.name}
        title1={personalData.title1}
        title2={personalData.title2}
        clickHandle={(props) => handleClick(`${props}`)}
        scrollerClickf={scrollerClickf()}
        scrollerClickb={scrollerClickb()}
      />
      <Footer />
    </div>
  );
}

export default App;
