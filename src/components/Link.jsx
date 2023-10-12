import styles from "./Link.module.css";
import React from "react";
import { NavLink as Route } from "react-router-dom";

export default React.forwardRef(function Link({style, tabIndex, onClick, label, url, attrs, className }, ref) {
  function getClasses(arg) {
    const isActive = arg.isActive;
    const isPending = arg.isPending;
    const classes = `${className} ${styles.link} ${isPending ? styles.pending : isActive ? styles.active : ""}`;
    return classes;
  }
  return (
    <li>
      <Route ref={ref} tabIndex={tabIndex} style={style} onClick={onClick} className={getClasses} {...attrs} to={url}>
        {label}
      </Route>
    </li>
  );
});
