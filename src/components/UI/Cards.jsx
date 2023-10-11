import { useContext } from "react";
import DataContext from "../../Store/data-context";
import Card from "./Card";
import "./Cards.css";
export default function Cards() {
  const ctx = useContext(DataContext);

  return (
    <div className="cards">
      {ctx.cards.map(card => (
        <Card key={card.route} card={card} />
      ))}
    </div>
  );
}
