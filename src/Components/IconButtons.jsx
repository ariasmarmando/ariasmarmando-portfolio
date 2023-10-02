import "../CSS/iconButtons.css";
const IconButtons = (props) => {
  return (
    <div className="IconsButton">
      <img src={props.iconIMG} />
      <span>
        <a href={props.buttonRoute}>{props.buttonName}</a>
      </span>
    </div>
  );
};
export default IconButtons;
