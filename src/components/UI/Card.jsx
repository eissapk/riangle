import "./Card.css";
import { NavLink } from "react-router-dom";
import Arrow from "../Icons/Arrow";
import Arrow2 from "../Icons/Arrow2";
import Lines from "../Lines";

export default function Card({ card }) {
  return (
    <div className="card interact">
      <Lines />
      <NavLink to={card.route} className="interact">
        <div className="imgWrapper">
          <img loading="lazy" src={card.img} alt={card.desc} className="interact" />
          <span className="layer"></span>
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
