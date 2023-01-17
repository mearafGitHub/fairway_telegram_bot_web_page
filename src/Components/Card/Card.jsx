import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";
function Card({ menu_item, onAdd, onRemove }) {
  const [count, setCount] = useState(0);
  const { title, Image, id } = menu_item;

  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(menu_item);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(menu_item);
  };

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      {/* <div className="image__container">
        <img src={Image} alt={title} />
      </div> */}

      <div className="btn-container">
        <Button title={title} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={title} type={"remove"} onClick={handleDecrement} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
