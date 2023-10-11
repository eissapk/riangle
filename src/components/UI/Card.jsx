import "./Card.css";
import { NavLink } from "react-router-dom";

export default function Card({ card }) {
  return (
    <div className="card interact">
      <NavLink to={card.route} className="interact">
        <div className="imgWrapper">
          <img loading="lazy" src={card.img} alt={card.desc} className="interact" />
        </div>
        <h3 className="interact">{card.desc}</h3>
        <p className="interact">{card.date}</p>
        <span className="interact">READ ARTICLE</span>
      </NavLink>
    </div>
  );
}
