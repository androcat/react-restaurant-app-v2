import "./Order.css";

export default function Order({ orderList }) {
  const sumTotal = orderList.reduce(
    (total, currentValue) => total + currentValue.price,
    0
  );

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
            <p>${orderItem.price}</p>
          </li>
        ))}
      </ul>
      <p style={{ textAlign: "right" }}>Total: ${sumTotal}</p>
      <p style={{ textAlign: "right" }}>
        <button
          onClick={() => {
            localStorage.setItem(
              "Order",
              `Order: ${orderList.map((item) => item.name)}, Total: ${sumTotal}`
            );
          }}
        >
          Submit Order
        </button>
      </p>
    </aside>
  );
}
