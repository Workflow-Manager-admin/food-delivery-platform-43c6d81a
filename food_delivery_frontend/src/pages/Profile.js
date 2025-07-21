import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// PUBLIC_INTERFACE
function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
    return null;
  }
  return (
    <div className="page container">
      <h2>Your Profile</h2>
      <div className="profile-info">
        <div><strong>Name:</strong> {user.name}</div>
        <div><strong>Email:</strong> {user.email}</div>
      </div>
      <button className="btn small danger" onClick={logout}>Logout</button>
    </div>
  );
}
export default Profile;
