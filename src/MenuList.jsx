import MenuItems from "./menuItems";

export default function MenuList({ addToOrder }) {
  return (
    <>
      <section>
        <h1>Jay's Colombian American Fusion</h1>
        <ul style={{ width: "100%" }}>
          <MenuItems addToOrder={addToOrder} />
        </ul>
      </section>
    </>
  );
}
