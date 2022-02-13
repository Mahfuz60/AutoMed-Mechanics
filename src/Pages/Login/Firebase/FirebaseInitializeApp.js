import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";



const firebaseAuthenticationApp = () => {
  initializeApp(firebaseConfig);
};

export default firebaseAuthenticationApp;
