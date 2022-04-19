import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const signUp = (user) => {
    const { registerEmail, registerPassword } = user;
    return (createUserWithEmailAndPassword(auth, registerEmail, registerPassword));
  }

  const signIn = (user) => {
    const { loginEmail, loginPassword } = user;
    return (signInWithEmailAndPassword(auth, loginEmail, loginPassword));
  }

  const signOff = () => {
    return (signOut(auth));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return (() => {
      return unsubscribe();
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signIn,
        signOff,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};