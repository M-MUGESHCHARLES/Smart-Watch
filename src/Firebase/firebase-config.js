import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8VbYF6iziWvNDXVO0VMTPTfs9U9DJNe8",
  authDomain: "smartwatch-01.firebaseapp.com",
  projectId: "smartwatch-01",
  storageBucket: "smartwatch-01.appspot.com",
  messagingSenderId: "908937553431",
  appId: "1:908937553431:web:8735b76ce5c0f6d04d1e52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();