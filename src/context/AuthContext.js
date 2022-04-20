import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

  const resetPassword = (user) => {
    const { loginEmail } = user;
    return (sendPasswordResetEmail(auth, loginEmail));
  }

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
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
        resetPassword,
        signInWithGoogle,
        signOff,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};