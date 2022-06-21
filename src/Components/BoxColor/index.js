export function BoxColor(props) {
  const divColor = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    color: 'white',
  };

  return (
    <div>
      <p className="boxColor" style={divColor}>
        rgb({props.r}, {props.g}, {props.b}) #ff0000
      </p>
    </div>
  );
}
