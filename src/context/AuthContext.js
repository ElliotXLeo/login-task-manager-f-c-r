import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signUp = (user) => {
    const { registerEmail, registerPassword } = user;
    return (createUserWithEmailAndPassword(auth, registerEmail, registerPassword));
  }

  const signIn = (user) => {
    const { loginEmail, loginPassword } = user;
    return (signInWithEmailAndPassword(auth, loginEmail, loginPassword));
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};