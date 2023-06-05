import { menuData } from "./menuData";
import "./MenuItems.css";

export default function MenuItems({ addToOrder }) {
  //   const [hover, setHover] = useState(false);
  function handleClick(e) {
    // This will prevent any synthetic events from firing after this one
    // e.stopPropagation();
    e.preventDefault();
    addToOrder(item.name, item.price);
    // e.target.style.backgroundColor = "gray";
  }

  return (
    <>
      {menuData.map((item, index) => (
        <div
          key={index}
          className="item"
          onClick={(e) => {
            e.preventDefault();
            addToOrder(item.name, item.price);
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
