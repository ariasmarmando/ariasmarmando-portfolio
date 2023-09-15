import "../CSS/IDCard.css";
const IDCard = () => {
  return (
    <div className="ID-Card">
      <div className="ID-Picture"></div>
      <div className="ID-Name">
        <span>Armando Arias</span>
      </div>
      <div className="ID-Title1">
        <span className="orangeBrackets">&#91;</span>{" "}
        <span>Front-End Developer</span>
        <span className="orangeBrackets">&#93;</span>
      </div>
      <div className="ID-Title2">
        <span id="orangePsign">&#43;</span> <span>UX / UI Designer</span>
      </div>
    </div>
  );
};
export default IDCard;
