import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {AuthContext} from "./AuthContext";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

   const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

  // get current user info
  useEffect(() => {
    // set/mount the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    // clear the observer
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    logInUser,
    googleSignIn,
    logOut,
    user,
    setUser,
    loading,
    profileUpdate
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
