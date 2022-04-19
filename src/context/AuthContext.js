import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const user = {
    login: true
  }

  return (
    <AuthContext.Provider
      value={{
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};