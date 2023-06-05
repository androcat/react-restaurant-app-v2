import "./Order.css";

export default function Order({ orderList }) {
  return (
    <aside className="order">
      <h2>Your Order</h2>
      <ul style={{ listStyle: "none" }}>
        {orderList.map((orderItem, index) => (
          <li
            key={index}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>{orderItem.name}</p>
            <p>{orderItem.price}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
