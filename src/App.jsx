import { useState } from "react";
import "./App.css";

import MenuList from "./MenuList";
import Order from "./Order";

function App() {
  const [orderList, setOrderList] = useState([]);

  const addToOrder = function (item) {
    const newOrder = { name: item.name, price: item.price, qty: item.qty };

    setOrderList([...orderList, newOrder]);

    // if (item.qty === 0) {
    //   item.qty++;
    //   console.log(item.qty);
    //   setOrderList([...orderList, newOrder]);
    // } else {
    //   item.qty++;
    //   setOrderList([...orderList]);
    // }
  };

  return (
    <>
      <h1>Jay's Colombian American Fusion</h1>
      <main className="main">
        <MenuList addToOrder={addToOrder} />
        <Order orderList={orderList} />
      </main>
    </>
  );
}

export default App;
