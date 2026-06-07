import "../CSS/HID.css";

const HID = (props) => {
  const visible = props.scrollLocation === 2 || props.scrollLocation === 3;
  return (
    <div className={visible ? "H-ID-Card" : "none"}>
      <div className="H-ID-Picture">
        <img src={props.pfp} alt={props.name} />
      </div>
      <span className="h-inside-text">{props.name}</span>
      <span className="H-orangeBrackets">&#91;</span>
      <span className="h-inside-text">{props.title1}</span>
      <span className="H-orangeBrackets">&#93;</span>
      <span id="H-orangePsign">&#43;</span>
      <span className="h-inside-text">{props.title2}</span>
    </div>
  );
};

export default HID;
