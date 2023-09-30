import "../CSS/screenL-Body.Main.css";
import HorizontalCarrier from "./HorizontalCarrier";
import nextScroll from "../svg/circle-chevron-right-solid.svg";
import prevScroll from "../svg/circle-chevron-left-solid.svg";
const Body = (props) => {
  return (
    <div className="mainBody-container">
      <HorizontalCarrier
        pfp={props.pfp}
        name={props.name}
        title1={props.title1}
        title2={props.title2}
        scrollMeTo={(where) => props.clickHandle(where)}
        scrollLocation={props.scrollLocation}
      />
      <div className="prev-button" onClick={props.scrollerClickb}>
        <img src={prevScroll} />
      </div>
      <div className="next-button" onClick={props.scrollerClickf}>
        <img src={nextScroll} />
      </div>
    </div>
  );
};
export default Body;
