import { useEffect, useState } from "react";
import styles from "./Pointer.module.css";

export default function Pointer() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState(false);
  const dim = { onGLow: 88, onDefault: 40 };

  const mouseMove = e => {
    setCoords({ x: e.x, y: e.y });
    if (e.target.classList.contains("interact")) return setGlow(true);
    setGlow(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const classes = `${styles.pointer} ${glow ? styles.glow : ""}`;
  const translate = prop => `translate(${coords.x - dim[prop] / 2}px,${coords.y - dim[prop] / 2}px)`;

  return (
    <span
      className={classes}
      style={{
        width: glow ? dim.onGLow + "px" : dim.onDefault + "px",
        height: glow ? dim.onGLow + "px" : dim.onDefault + "px",
        transform: glow ? translate("onGlow") : translate("onDefault"),
      }}
    ></span>
  );
}
