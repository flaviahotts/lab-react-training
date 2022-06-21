export function Greetings(props) {
  return (
    <div>
      <h3>Language: {props.lang}</h3>
      <h3>Name: {props.children}</h3>
    </div>
  );
}
