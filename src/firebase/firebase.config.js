// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi7BvDACl19tu_ZEpzol_loaJHViCNu1A",
  authDomain: "mern-item-inventory-5652c.firebaseapp.com",
  projectId: "mern-item-inventory-5652c",
  storageBucket: "mern-item-inventory-5652c.appspot.com",
  messagingSenderId: "503048293055",
  appId: "1:503048293055:web:f7e4f1a6b921f6c2f0540a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;