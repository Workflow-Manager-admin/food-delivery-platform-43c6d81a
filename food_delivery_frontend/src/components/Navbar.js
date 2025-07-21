import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import "./Navbar.css";

// PUBLIC_INTERFACE
function Navbar({ onSidebarToggle, theme, toggleTheme }) {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const location = useLocation();

  return (
    <nav className="navbar">
      <button className="sidebar-toggle" aria-label="Open sidebar" onClick={onSidebarToggle}>&#9776;</button>
      <Link to="/" className="navbar-brand">🍔 Foodly</Link>
      <div className="navbar-links">
        <Link to="/menu" className={location.pathname === "/menu" ? "active" : ""}>Menu</Link>
        {user && (
          <>
            <Link to="/orders" className={location.pathname === "/orders" ? "active" : ""}>Orders</Link>
            <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>Profile</Link>
          </>
        )}
        <Link to="/cart" className="cart-link">
          Cart
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </Link>
        <button className="theme-toggle-navbar" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        {user ? (
          <button className="btn small" onClick={logout}>Logout</button>
        ) : (
          <Link to="/login" className="btn small">Login</Link>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
