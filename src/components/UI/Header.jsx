// todo: install react-router
import classes from "./Header.module.css";
import Logo from "../Icons/Logo";
import { useState, useEffect } from "react";
import Name from "../Icons/Name";
import BurgerMenu from "../UI/BurgerMenu";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import { Link as Route } from "react-router-dom";
import { DataContext } from "../../Store/data-context";
import { useContext } from "react";

export default function Header() {
  const [burgerMenuIsShown, setBurgerMenuIsShown] = useState(false);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const breakPoint = 990;
  const delay = useContext(DataContext).headerDelay;

  const winWidthHandler = () => setWinWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", winWidthHandler);
    return () => window.removeEventListener("resize", winWidthHandler);
  }, []);

  if (burgerMenuIsShown) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

  const hideMenu = () => setBurgerMenuIsShown(false);

  return (
    <>
      {/* mobile menu */}
      {burgerMenuIsShown && winWidth < breakPoint && <Menu>{<MenuItems hideMenu={hideMenu} mode="mobile" />}</Menu>}

      <div className={classes.headerWrapper}>
        <em className={classes.bottomBorder} style={{ animationDelay: delay + "s" }}></em>
        <div className={classes.header}>
          <Route to="/" className={`${classes.logo} interact`}>
            <Logo />
          </Route>
          <Route to="/" style={{ animationDelay: delay + "s", opacity: 0 }} className={`${classes.name} interact toBottom`}>
            <Name />
          </Route>

          {/* burger menu icon + desktop menu items */}
          {winWidth < breakPoint ? <BurgerMenu style={{ animationDelay: delay + "s", opacity: 0 }} className="toLeft" burgerMenuIsShown={burgerMenuIsShown} onClick={() => setBurgerMenuIsShown(!burgerMenuIsShown)} /> : <MenuItems mode="desktop" />}
        </div>
      </div>
    </>
  );
}
