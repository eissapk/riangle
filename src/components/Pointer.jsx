import { useEffect, useState } from "react";
import styles from "./Pointer.module.css";

export default function Pointer({ multiplier }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState(false);
  const size = 40;
  const dim = { onGlow: size * multiplier, onDefault: size };

  const mouseMove = e => {
    setCoords({ x: e.x, y: e.y });
    if (e.target.classList.contains("interact")) return setGlow(true);
    setGlow(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    console.warn("Mounted Pointer");
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const classes = `${styles.pointer} ${glow ? styles.glow : ""}`;
  const translate = prop => {
    let scale = "";
    if (prop == "onGlow") scale = ` scale(${multiplier},${multiplier})`;
    return `translate(${coords.x - dim[prop] / 2}px,${coords.y - dim[prop] / 2}px)${scale}`;
  };

  return (
    <span
      className={classes}
      style={{
        transform: glow ? translate("onGlow") : translate("onDefault"),
        width: dim.onDefault + "px",
        height: dim.onDefault + "px",
      }}
    ></span>
  );
}
