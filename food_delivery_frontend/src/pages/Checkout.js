import React from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

// ENV VAR (future): process.env.REACT_APP_STRIPE_PK

// PUBLIC_INTERFACE
function Checkout() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, i) => sum + i.price, 0);
  const navigate = useNavigate();

  // Simulated payment
  const handlePay = () => {
    clearCart();
    // In reality, redirect to Stripe checkout using process.env.REACT_APP_STRIPE_PK
    setTimeout(() => {
      const fakeOrderId = Math.floor(Math.random() * 10000) + "";
      navigate(`/order-tracking/${fakeOrderId}`);
    }, 1000);
  };

  if (cart.length === 0) {
    return (
      <div className="page container center">
        <h3>No items to checkout.</h3>
      </div>
    );
  }

  return (
    <div className="page container">
      <h2>Checkout</h2>
      <div className="checkout-list">
        {cart.map(item => (
          <div key={item.id} className="checkout-item">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
        <div className="checkout-total">
          <strong>Total:</strong> ${total.toFixed(2)}
        </div>
      </div>
      <button className="btn large primary" onClick={handlePay}>Pay & Place Order</button>
    </div>
  );
}
export default Checkout;
