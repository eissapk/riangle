import { useContext } from "react";
import { DataContext } from "../../Store/data-context";
import Card from "./Card";
import "./Cards.css";
import Button from "../Button";
import "../LoadMoreBtn.css";
import { useState } from "react";
const limit = 5; // card number to be shown on each click on "load more" button

// todo: figure out how to append component to dom (react way) for next elemnts in cycle instead of looping over the whole array for better memory optimization
export default function Cards() {
  const [counter, setCounter] = useState(limit);
  const ctx = useContext(DataContext);
  const newList = JSON.parse(JSON.stringify(ctx.cards));
  const [items, setItems] = useState(newList.slice(0, limit));

  console.log(items);

  function loadMoreHandler() {
    setItems(newList.slice(0, counter + limit));
    if (items.length == newList.length || !items.length) return;
    setCounter(counter + limit);
  }

  return (
    <>
      <div className="cards">
        {items.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>

      {items.length != newList.length && (
        <Button onClick={loadMoreHandler} className="loadMoreBtn interact" type="button">
          Load more
        </Button>
      )}
    </>
  );
}
