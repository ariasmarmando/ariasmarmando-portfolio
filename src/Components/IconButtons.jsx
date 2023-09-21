import "../CSS/iconButtons.css";
const IconButtons = (props) => {
  return (
    <div className="IconsButton">
      <img src={props.iconIMG} />
      <span onClick={props.buttonRoute}>{props.buttonName}</span>
    </div>
  );
};
export default IconButtons;
