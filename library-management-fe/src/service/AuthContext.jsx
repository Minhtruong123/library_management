import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = localStorage.getItem("userInfo");
    if (token && userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    const role = Array.isArray(userData.roles)
      ? userData.roles[0]
      : userData.role;
    localStorage.setItem("role", role);
    localStorage.setItem("userInfo", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
