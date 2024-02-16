// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-69df2.firebaseapp.com",
  projectId: "mern-auth-69df2",
  storageBucket: "mern-auth-69df2.appspot.com",
  messagingSenderId: "121579085774",
  appId: "1:121579085774:web:b2d5fea2e3c2e2a5ba959f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);