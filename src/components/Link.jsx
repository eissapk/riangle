import styles from "./Link.module.css";
import { NavLink as Route } from "react-router-dom";
export default function Link({ onClick, label, url, attrs, className }) {
  function getClasses(arg) {
    const isActive = arg.isActive;
    const isPending = arg.isPending;
    const classes = `${className} ${styles.link} ${isPending ? styles.pending : isActive ? styles.active : ""}`;
    return classes;
  }
  return (
    <li>
      <Route onClick={onClick} className={getClasses} {...attrs} to={url}>
        {label}
      </Route>
    </li>
  );
}
