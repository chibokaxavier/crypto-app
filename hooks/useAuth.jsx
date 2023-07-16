import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";

import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext({
  //   user,
  //   signIn,
  //   signUp,
  //   logout,
  //   error,
  //   loading
});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [error, setError] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged in.......
          setUser(user);
          setLoading(false);
        } else {
          // Not logged in......
          setUser(null);
        }

        setInitialLoading(false);
      }),
    [auth]
  );

  const signUp = async (email, password, name) => {
    await createUserWithEmailAndPassword(auth, email, name, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        updateProfile(auth.currentUser, { displayName: name });
        router.push("/");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };
  const logout = async () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        router.push("/");
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const memoedValue = useMemo(
    () => ({
      signIn,
      logout,
      signUp,
      user,
      error,
      loading,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
