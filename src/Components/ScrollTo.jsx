const ScrollTo = (props) => {
  return (
    <div>
      <button onClick={props.whereTo}>
        {props.name}
        <img src={props.img} />
      </button>
    </div>
  );
};
export default ScrollTo;
