import { useState } from "react";
import "./App.css";

import MenuList from "./MenuList";
import Order from "./Order";

function App() {
  const [orderList, setOrderList] = useState([]);

  const addToOrder = function (name, price) {
    const newOrder = { name, price };

    setOrderList([...orderList, newOrder]);

    console.log({ orderList });
  };

  return (
    <>
      <main
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <MenuList addToOrder={addToOrder} />
        <Order orderList={orderList} />
      </main>
    </>
  );
}

export default App;
