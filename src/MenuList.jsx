import MenuItems from "./menuItems";
import "./MenuList.css";

export default function MenuList({ addToOrder }) {
  return (
    <>
      <section className="menu">
        <h2>Menu</h2>
        <ul>
          <MenuItems addToOrder={addToOrder} />
        </ul>
      </section>
    </>
  );
}
