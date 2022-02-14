import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const FirebaseAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseAuthentication;
