import ReactDOM from "react-dom";
import classes from "./Menu.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop}>{props.children}</div>;
}

export default function Menu(props) {
  return <>{ReactDOM.createPortal(<Backdrop>{props.children}</Backdrop>, document.getElementById("overlayers"))}</>;
}
