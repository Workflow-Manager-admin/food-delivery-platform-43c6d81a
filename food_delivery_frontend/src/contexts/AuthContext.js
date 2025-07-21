import React, { useState, createContext, useContext } from "react";

// PUBLIC_INTERFACE
const AuthContext = createContext({});

// Simulated auth logic for prototype
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // PUBLIC_INTERFACE
  const login = (email, password) => {
    // Replace with API call
    const demoUser = { id: 1, name: "Jane Doe", email };
    setUser(demoUser);
    localStorage.setItem("user", JSON.stringify(demoUser));
    return true;
  };

  // PUBLIC_INTERFACE
  const register = (details) => {
    // Replace with API call
    setUser({ id: 1, name: details.name, email: details.email });
    localStorage.setItem("user", JSON.stringify({ id: 1, ...details }));
    return true;
  };

  // PUBLIC_INTERFACE
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useAuth() {
  return useContext(AuthContext);
}
