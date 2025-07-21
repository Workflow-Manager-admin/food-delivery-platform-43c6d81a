import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

// PUBLIC_INTERFACE
function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate("/checkout");
    }
  };

  return (
    <div className="page container">
      <h2>Your Cart</h2>
      <div className="cart-list">
        {cart.length === 0 ? (
          <div>Your cart is empty. <Link to="/menu">Browse Menu</Link></div>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <button className="btn small" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
            <div className="cart-total">
              <strong>Total:</strong> ${total.toFixed(2)}
            </div>
            <div className="cart-actions">
              <button className="btn danger" onClick={clearCart}>Clear Cart</button>
              <button className="btn large primary" onClick={handleCheckout}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Cart;
