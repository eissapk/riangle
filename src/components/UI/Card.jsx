import "./Card.css";
import { NavLink } from "react-router-dom";
import Arrow from "../Icons/Arrow";
import Arrow2 from "../Icons/Arrow2";

export default function Card({ card }) {
  return (
    <div className="card interact">
      <NavLink to={card.route} className="interact">
        <div className="imgWrapper">
          <img loading="lazy" src={card.img} alt={card.desc} className="interact" />
        </div>
        <h3 className="interact">{card.desc}</h3>
        <p className="interact">{card.date}</p>
        <div className="interact readBtn">
          <span className="interact">READ ARTICLE</span>
          <Arrow />
          <Arrow2 />
          <Arrow2 />
        </div>
      </NavLink>
    </div>
  );
}
