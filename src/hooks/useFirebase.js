import { useEffect } from "react";
import { useState } from "react";
import FirebaseAuthentication from "../../src/Pages/Login/Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

FirebaseAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  //googleSignIn methods
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //logOut Method
  const logOut = () => {
    signOut(auth).then(() => {});
  };
  //User StateChange Methods
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  return {
    googleSignIn,
    user,
    error,
    logOut,
  };
};

export default useFirebase;
