import { menuData } from "./menuData";
import "./MenuItems.css";

export default function MenuItems({ addToOrder }) {
  return (
    <>
      {menuData.map((item, index) => (
        <div
          key={index}
          className="item"
          onClick={(e) => {
            e.preventDefault();
            addToOrder(item);
          }}
        >
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>{item.name}</p>
            <p>{item.price}</p>
          </li>
        </div>
      ))}
    </>
  );
}
