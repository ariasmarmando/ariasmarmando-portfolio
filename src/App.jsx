import "./CSS/screenL-main.css";
import Nav from "./Components/Nav";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import IDimage from "./images/PFP3.png";

function App() {
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
  };

  return (
    <div className="screenL-skeleton-container">
      <Nav clickHandle={(props) => handleClick(`${props}`)} />
      <Body
        pfp={personalData.pfp}
        name={personalData.name}
        title1={personalData.title1}
        title2={personalData.title2}
        clickHandle={(props) => handleClick(`${props}`)}
      />
      <Footer />
    </div>
  );
}

export default App;
