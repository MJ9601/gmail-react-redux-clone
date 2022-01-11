// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD1vtpsKo9Na72CO6puSV2BD8zc0JAOBc",
  authDomain: "react-redux-87ecb.firebaseapp.com",
  projectId: "react-redux-87ecb",
  storageBucket: "react-redux-87ecb.appspot.com",
  messagingSenderId: "596318435341",
  appId: "1:596318435341:web:180229919f103ff748bd44",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const googleAuth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { googleAuth, provider };
export default db;
