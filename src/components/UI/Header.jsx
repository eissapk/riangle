// todo: install react-router
import classes from "./Header.module.css";
import Logo from "../Icons/Logo";
import { useState, useEffect } from "react";
import Name from "../Icons/Name";
import BurgerMenu from "../UI/BurgerMenu";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import { Link as Route } from "react-router-dom";

export default function Header() {
  const [burgerMenuIsShown, setBurgerMenuIsShown] = useState(false);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const breakPoint = 990;

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
        <div className={classes.header}>
          <Route to="/" className={`${classes.logo} interact`}>
            <Logo />
          </Route>
          <Route to="/" className={`${classes.name} interact`}>
            <Name />
          </Route>

          {/* burger menu icon + desktop menu items */}
          {winWidth < breakPoint ? <BurgerMenu burgerMenuIsShown={burgerMenuIsShown} onClick={() => setBurgerMenuIsShown(!burgerMenuIsShown)} /> : <MenuItems mode="desktop" />}
        </div>
      </div>
    </>
  );
}
