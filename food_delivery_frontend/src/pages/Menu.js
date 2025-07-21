import React, { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";

// Demo data
const DEMO_MENU = [
  { id: 1, name: "Veggie Burger", price: 9.5, category: "Burgers", image: "https://images.unsplash.com/photo-1519864600265-abb2372b1c02?w=600", desc: "A healthy twist." },
  { id: 2, name: "Cheese Pizza", price: 12, category: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600", desc: "Mozzarella-laden, wood-fired." },
  { id: 3, name: "Spicy Ramen", price: 11, category: "Asian", image: "https://images.unsplash.com/photo-1523987355523-c7b5b0723c4e?w=600", desc: "Rich broth, soft noodles." },
  { id: 4, name: "Chicken Shawarma", price: 8, category: "Wraps", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600", desc: "Juicy, spiced, classic." }
];

const CATEGORIES = ["All", ...Array.from(new Set(DEMO_MENU.map((item) => item.category)))];

// PUBLIC_INTERFACE
function Menu() {
  const [menu, setMenu] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    // Replace with fetch to backend
    setMenu(DEMO_MENU);
  }, []);

  const filtered = menu.filter(item =>
    (filter === "All" || item.category === filter) &&
    (item.name.toLowerCase().includes(search.toLowerCase()) || item.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="page container">
      <h2>Menu</h2>
      <div className="menu-toolbar">
        <input
          className="menu-search"
          type="search"
          placeholder="Search food…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          {CATEGORIES.map(cat => (
            <option value={cat} key={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="menu-grid">
        {filtered.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-img"/>
            <div className="menu-info">
              <div className="menu-title">{item.name}</div>
              <div className="menu-desc">{item.desc}</div>
              <div className="menu-meta">
                <div className="menu-price">${item.price.toFixed(2)}</div>
                <button className="btn small" onClick={() => addToCart(item)}>Add</button>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <div>No items found.</div>}
      </div>
    </div>
  );
}
export default Menu;
