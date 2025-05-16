import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1OtEYL5x2OSPnXs8kp0b8VU1ttXcJ0uM",
  authDomain: "ecommerce-3504d.firebaseapp.com",
  projectId: "ecommerce-3504d",
  storageBucket: "ecommerce-3504d.firebasestorage.app",
  messagingSenderId: "202940165833",
  appId: "1:202940165833:web:2a6959d473b9b60b286718",
  measurementId: "G-8HKFP3LCZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {app, auth,provider };