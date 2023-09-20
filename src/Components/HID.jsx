import "../CSS/HID.css";
const HID = (props) => {
  return (
    <div className="H-ID-Card">
      <div className="H-ID-Picture">
        <img src={props.pfp} />
      </div>
      <div className="H-ID-Name">
        <span id="H-NameID">{props.name}</span>
      </div>
      <div className="H-ID-Title1">
        <span className="H-orangeBrackets">&#91;</span>{" "}
        <span>{props.title1}</span>
        <span className="H-orangeBrackets">&#93;</span>
      </div>
      <div className="H-ID-Title2">
        <span id="H-orangePsign">&#43;</span> <span>{props.title2}</span>
      </div>
    </div>
  );
};
export default HID;
