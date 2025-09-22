// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6UbPxktykBO7Le6oMSwNErJT-7GARGPY",
  authDomain: "banco-de-dados-fba27.firebaseapp.com",
  projectId: "banco-de-dados-fba27",
  storageBucket: "banco-de-dados-fba27.appspot.com",
  messagingSenderId: "993017209264",
  appId: "1:993017209264:web:9fffd3d8224b4c33b0b675",
  measurementId: "G-JJDMJ1DRXQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
