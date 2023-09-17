import "../CSS/screenL-Body.Main.css";
import HorizontalCarrier from "./HorizontalCarrier";

const Body = (props) => {
  return (
    <div className="mainBody-container">
      <HorizontalCarrier
        pfp={props.pfp}
        name={props.name}
        title1={props.title1}
        title2={props.title2}
        scrollMeTo={(where) => props.clickHandle(where)}
      />
    </div>
  );
};
export default Body;
