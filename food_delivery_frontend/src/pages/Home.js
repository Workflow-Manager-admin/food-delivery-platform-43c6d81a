import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
function Home() {
  return (
    <div className="home-page container mobile-no-pad center">
      <h1>Welcome to Foodly</h1>
      <p>Discover delicious food from local restaurants and get it delivered lightning fast!</p>
      <Link className="btn large" to="/menu">Browse Menu</Link>
    </div>
  );
}
export default Home;
