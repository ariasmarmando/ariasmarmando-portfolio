import "../CSS/iconButtons.css";
const IconButtons = (props) => {
  return (
    <a target="_blank" href={props.buttonRoute} className="IconsButton">
      <div className="buttonContent">
        <img src={props.iconIMG} alt={props.buttonName} />
        <span>{props.buttonName}</span>
      </div>
    </a>
  );
};
export default IconButtons;
