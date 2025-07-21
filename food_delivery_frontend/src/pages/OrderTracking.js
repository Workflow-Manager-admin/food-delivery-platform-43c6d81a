import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// PUBLIC_INTERFACE
function OrderTracking() {
  const { orderId } = useParams();
  // Simulate order progress
  const [status, setStatus] = useState("Preparing");
  const statusSequence = ["Preparing", "Picked Up", "On The Way", "Delivered"];
  useEffect(() => {
    let step = 0;
    const int = setInterval(() => {
      if (step < statusSequence.length - 1) {
        step++;
        setStatus(statusSequence[step]);
      } else {
        clearInterval(int);
      }
    }, 2000);
    return () => clearInterval(int);
  }, []);
  return (
    <div className="page container center">
      <h2>Order #{orderId}</h2>
      <div>Your order status: <strong>{status}</strong></div>
      {status === "Delivered" && (
        <div>
          <Link className="btn" to="/orders">View Order History</Link>
        </div>
      )}
    </div>
  );
}
export default OrderTracking;
