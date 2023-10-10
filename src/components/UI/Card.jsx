import classes from "./Card.module.css";
import { NavLink } from "react-router-dom";

export default function Card({ card }) {
  return (
    <div className={classes.card}>
      <NavLink to={card.route}>
        <img src={card.img} alt={card.desc} />
        <h3>{card.desc}</h3>
        <p>{card.date}</p>
        <span>READ ARTICLE</span>
      </NavLink>
    </div>
  );
}
