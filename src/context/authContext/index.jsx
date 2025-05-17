// src/context/authContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [account,setAccount] = useState(null);
  const islogin = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);
  const afterLogin = (user) =>{
    islogin();
    setAccount(user);
    navigate('/home');
}
  return (
    <AuthContext.Provider value={{ afterLogin,setIsAuthenticated ,isAuthenticated,account,setAccount, islogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
