import styles from "./Link.module.css";
import { Link as Route, useMatch } from "react-router-dom";
export default function Link({onClick ,label, url, attrs, className }) {
  const active = useMatch(url) ? styles.active : "";
  const classes = `${className ? className : ""} ${styles.link} ${active}`;
  return (
    <li>
      <Route onClick={onClick} className={classes} {...attrs} to={url}>
        {label}
      </Route>
    </li>
  );
}
