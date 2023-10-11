import { useContext } from "react";
import DataContext from "../../Store/data-context";
import Card from "./Card";
import "./Cards.css";
import Button from "../Button";
export default function Cards() {
  const ctx = useContext(DataContext);

  const btnStyles = {
    margin: "0 auto",
    display: "block",
    fontSize: "50px",
  };

  // todo add load more button
  return (
    <>
      <div className="cards">
        {ctx.cards.map(card => (
          <Card key={card.route} card={card} />
        ))}
      </div>
      <Button style={btnStyles} type="button">
        Load More
      </Button>
    </>
  );
}
