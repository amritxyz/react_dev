import React, { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext.jsx";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      console.error("Failed to parse user from localStorage", error);
      return null;
    }
  });

  const login = (setToken, useState) => {
    setToken(loginToken);
    setUser(userDetails);
  }

  useEffect(() => {
    if (token && user) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, [token, user])

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      storedToken(storedToken);
      storedUser(storedUser);
    }
  }, [])

  return (
    <AuthContext.Provider value={{ token, user, login }} >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
