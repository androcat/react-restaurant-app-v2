import { menuData } from "./menuData";
import "./MenuItems.css";

export default function MenuItems() {
  //   const [hover, setHover] = useState(false);
  function handleClick(e) {
    // This will prevent any synthetic events from firing after this one
    // e.stopPropagation();
    e.preventDefault();
    // e.target.style.backgroundColor = "gray";
  }

  return (
    <>
      {menuData.map((item, index) => (
        <div
          key={index}
          className="item"
          onClick={(e) => handleClick(e)}
          onMouseEnter={(e) => {
            e.stopPropagation();
            e.target.style.backgroundColor = "gray";
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
            e.target.style.backgroundColor = "white";
          }}
        >
          <li
            onMouseEnter={(e) => {
              e.stopPropagation();
              e.target.style.backgroundColor = "gray";
            }}
            onMouseLeave={(e) => {
              e.stopPropagation();
              e.target.style.backgroundColor = "white";
            }}
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
