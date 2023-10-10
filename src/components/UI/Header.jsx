// todo: install react-router
import classes from "./Header.module.css";
import Logo from "../Icons/Logo";
import Name from "../Icons/Name";

export default function Header() {
  return (
    <>
      <div className={classes.header}>
        <a href="/" className={`${classes.logo} interact`}>
          <Logo />
        </a>
        <a href="/" className="name interact">
          <Name />
        </a>
      </div>
    </>
  );
}
