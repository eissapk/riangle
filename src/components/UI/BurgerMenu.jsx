// menu button for mobile
import Line from "../Icons/Line";
import Button from "../Button";
import classes from "./BurgerMenu.module.css";

export default function BurgerMenu(props) {
  const style = { transform: props.burgerMenuIsShown ? "rotate(45deg)" : "", position: props.burgerMenuIsShown ? "absolute" : "" };
  return (
    <>
      <Button onClick={props.onClick} style={props.style} type="button" className={`${classes.burgerMenu} ${props.className} interact`}>
        <Line style={style} />
        <Line style={{ display: props.burgerMenuIsShown ? "none" : "" }} />
        <Line style={{ transform: props.burgerMenuIsShown ? "rotate(-45deg)" : "" }} />
      </Button>
    </>
  );
}
