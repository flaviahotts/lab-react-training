export function IdCard(props) {
  const date = props.birth.toDateString();

  return (
    <div>
      <img src={props.picture} alt="altName" />
      <h3>First name: {props.firstName}</h3>
      <h3>Last name: {props.lastName}</h3>
      <h3>Gender: {props.gender}</h3>
      <h3>Height: {props.height}</h3>
      <h3>Birth: {date}</h3>
    </div>
  );
}
