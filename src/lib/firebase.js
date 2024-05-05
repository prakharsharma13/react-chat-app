// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-96dbf.firebaseapp.com",
  projectId: "react-chat-96dbf",
  storageBucket: "react-chat-96dbf.appspot.com",
  messagingSenderId: "367546206514",
  appId: "1:367546206514:web:9e5bcee3cad6deb30def2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage()