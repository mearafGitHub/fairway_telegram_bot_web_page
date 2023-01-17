import { useState, useEffect } from "react";
import "./MenuDisplay";
import MenuCard from "./MenuCard";

const { getData } = require("../../db/db");
console.log("MenuDisplay")
const menu_items = getData();

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (menu_item) => {
    const exist = cartItems.find((x) => x.id === menu_item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === menu_item.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...menu_item, quantity: 1 }]);
    }
  };

  const onRemove = (menu_item) => {
    const exist = cartItems.find((x) => x.id === menu_item.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== menu_item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === menu_item.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
  };

  return (
    <>
      <h1 className="heading">Fairway Account</h1>
      <MenuCard cartItems={cartItems} onCheckout={onCheckout}/>
      <div className="cards__container">
        {menu_items.map((menu_item) => {
          return (
            <MenuCard menu_item={menu_item} key={menu_items.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
}

export default App;
