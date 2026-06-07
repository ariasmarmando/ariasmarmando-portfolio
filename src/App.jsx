import "./CSS/screenL-main.css";
import Nav from "./Components/Nav";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import IDimage from "./images/me-cutout.png";
import { useState, useEffect, useCallback } from "react";

const SECTIONS = ["home", "aboutMe", "projects", "contact"];
const SECTION_INDEX = { home: 1, aboutMe: 2, projects: 3, contact: 4 };

function App() {
  const [locIndex, setLocIndex] = useState(1);

  const personalData = {
    pfp: IDimage,
    name: "Armando Arias",
    title1: "Computer Scientist",
    title2: "and Software Engineer",
  };

  // Sync active nav state with actual scroll position
  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setLocIndex(SECTION_INDEX[id]);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = useCallback(
    (anchor) => () => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    },
    []
  );

  // Returns the handler for the next section, or null if at the last section
  const scrollerClickF = useCallback(() => {
    const nextId = SECTIONS[locIndex]; // locIndex is 1-based; SECTIONS is 0-based → next
    if (!nextId) return null;
    return handleClick(nextId);
  }, [locIndex, handleClick]);

  // Returns the handler for the previous section, or null if at the first section
  const scrollerClickB = useCallback(() => {
    const prevId = SECTIONS[locIndex - 2]; // two steps back in 0-based array
    if (!prevId) return null;
    return handleClick(prevId);
  }, [locIndex, handleClick]);

  return (
    <div className="screenL-skeleton-container">
      <Nav
        sliderLocator={locIndex}
        clickHandle={(section) => handleClick(section)}
      />
      <Body
        pfp={personalData.pfp}
        name={personalData.name}
        title1={personalData.title1}
        title2={personalData.title2}
        clickHandle={(section) => handleClick(section)}
        scrollerClickF={scrollerClickF()}
        scrollerClickB={scrollerClickB()}
        scrollLocation={locIndex}
      />
      <Footer />
    </div>
  );
}

export default App;
