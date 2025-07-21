import React from "react";
import { useAuth } from "../contexts/AuthContext";

// Demo orders for MVP
const DEMO_ORDERS = [
  { id: 1001, date: "2024-06-11", status: "Delivered", total: 19.5, details: "Veggie Burger, Cheese Pizza" },
  { id: 1000, date: "2024-06-07", status: "Delivered", total: 8, details: "Chicken Shawarma" }
];

// PUBLIC_INTERFACE
function OrderHistory() {
  const { user } = useAuth();
  if (!user) return <div className="page container center"><h2>Login to see your orders.</h2></div>;
  return (
    <div className="page container">
      <h2>Order History</h2>
      <table className="order-history-table">
        <thead>
          <tr>
            <th>ID</th><th>Date</th><th>Status</th><th>Total</th><th>Items</th>
          </tr>
        </thead>
        <tbody>
          {DEMO_ORDERS.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>${order.total.toFixed(2)}</td>
              <td>{order.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default OrderHistory;
