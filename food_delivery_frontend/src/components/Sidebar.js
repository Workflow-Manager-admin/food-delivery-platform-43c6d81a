import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

// PUBLIC_INTERFACE
function Sidebar({ open, onClose }) {
  return (
    <div className={`sidebar${open ? " open" : ""}`}>
      <button className="sidebar-close" onClick={onClose}>&times;</button>
      <nav>
        <Link to="/menu" onClick={onClose}>Menu</Link>
        <Link to="/orders" onClick={onClose}>Orders</Link>
        <Link to="/profile" onClick={onClose}>Profile</Link>
        <Link to="/cart" onClick={onClose}>Cart</Link>
      </nav>
    </div>
  );
}
export default Sidebar;
