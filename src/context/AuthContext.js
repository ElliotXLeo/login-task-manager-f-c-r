import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const signUp = (user) => {
    const { registerEmail, registerPassword } = user;
    return (createUserWithEmailAndPassword(auth, registerEmail, registerPassword));
  }

  return (
    <AuthContext.Provider
      value={{
        signUp
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};