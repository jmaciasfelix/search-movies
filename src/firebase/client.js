import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrvggaQDY7Aa10LPnssmph7jmAgWTbr5k",
  authDomain: "filmmit.firebaseapp.com",
  projectId: "filmmit",
  storageBucket: "filmmit.appspot.com",
  messagingSenderId: "1021628394681",
  appId: "1:1021628394681:web:1ca91ec3c6eb4ed854bf68",
  measurementId: "G-P8HK1YV4RL",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider);
};
