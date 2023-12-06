// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-b4101.firebaseapp.com",
  projectId: "mern-auth-b4101",
  storageBucket: "mern-auth-b4101.appspot.com",
  messagingSenderId: "835304653697",
  appId: "1:835304653697:web:260eb0a5178ff1bec95e80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);