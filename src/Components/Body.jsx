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
            {props.scrollerClickB && (
                <div className="prev-button" onClick={props.scrollerClickB}>
                    <img src={prevScroll} alt="Previous section" />
                </div>
            )}
            {props.scrollerClickF && (
                <div className="next-button" onClick={props.scrollerClickF}>
                    <img src={nextScroll} alt="Next section" />
                </div>
            )}
        </div>
    );
};

export default Body;