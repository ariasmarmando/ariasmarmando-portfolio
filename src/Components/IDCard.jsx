import "../CSS/IDCard.css";

const IDCard = (props) => {
  return (
    <div className="ID-Card">
      <div className="ID-Picture">
        <div className="ID-Disc" />
        <div className="ID-Ring" />
        <img src={props.pfp} alt={props.name} className="ID-Avatar" />
      </div>
      <div className="ID-Name">
        <span id="NameID">{props.name}</span>
      </div>
      <div className="ID-Title1">
        <span className="orangeBrackets">&#91;</span>{" "}
        <span>{props.title1}</span>
        <span className="orangeBrackets">&#93;</span>
      </div>
      <div className="ID-Title2">
        <span id="orangePsign">&#43;</span> <span>{props.title2}</span>
      </div>
    </div>
  );
};

export default IDCard;
