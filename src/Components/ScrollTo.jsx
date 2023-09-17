const ScrollTo = (props) => {
  return (
    <div>
      <button onClick={props.whereTo}>{props.name}</button>
    </div>
  );
};
export default ScrollTo;
