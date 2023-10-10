import classes from "./Button.module.css";
export default function Button(props) {
  return (
    <button onClick={props.onClick} type={props.type} className={`${classes.button} ${props.className}`}>
      {props.children}
    </button>
  );
}
