import classes from "./MenuItems.module.css";
import Link from "../Link";
import Button from "../Button";
import Moon from "../Icons/Moon";
import Sun from "../Icons/Sun";
import DataContext from "../../Store/data-context";
import { useState, useContext } from "react";

export default function MenuItems(props) {
  const ctx = useContext(DataContext);
  const [isDark, setIsDark] = useState(false);

  function linkHandler() {
    if (props.mode !== "mobile") return;
    props.hideMenu();
  }

  const darkModeHandler = () => {
    setIsDark(!isDark);
    linkHandler();
  };

  return (
    <ul className={props.mode == "mobile" ? classes.ul_mobile : classes.ul_desktop}>
      {ctx.header.menu.map((label, index) => (
        <Link onClick={linkHandler} key={index} url={`/${label.toLowerCase()}`} className="interact" label={label} />
      ))}
      <Button className="interact" onClick={darkModeHandler}>
        {!isDark ? <Moon /> : <Sun />}
      </Button>
    </ul>
  );
}
