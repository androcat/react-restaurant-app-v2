import { useState } from "react";
import "./App.css";

import MenuList from "./MenuList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MenuList />
    </>
  );
}

export default App;
