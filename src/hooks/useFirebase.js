import { useEffect, useState } from "react";
// import firebaseAuthenticationApp from "../Pages/Login/Firebase/FirebaseInitializeApp";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import firebaseAuthenticationApp from "../Pages/Login/Firebase/FirebaseInitializeApp";

firebaseAuthenticationApp();

const auth = getAuth();
const googleSignInProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  //SignIn Method
  const googleSignIn = () => {
    signInWithPopup(auth, googleSignInProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  //observe UserS State Change
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

  //logout Method
  const logOut = () => {
    signOut(auth).then(() => {});
  };

  return {
    googleSignIn,
    logOut,
    user,
    error,
  };
};

export default useFirebase;
