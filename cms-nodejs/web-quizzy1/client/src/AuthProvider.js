import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [userInfo, setUserInfo] = useState();

  const login = (token, user) => {
    setToken(token);
    setUserInfo(user);
  };

  const logout = () => {
    setToken(null);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ token, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};