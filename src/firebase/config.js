import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsmuBBSvXgJvtRUsv_Y7cYMB4Y7M8Ac-E",
  authDomain: "ecommerce-reactjs-9dba8.firebaseapp.com",
  projectId: "ecommerce-reactjs-9dba8",
  storageBucket: "ecommerce-reactjs-9dba8.appspot.com",
  messagingSenderId: "714916785321",
  appId: "1:714916785321:web:bfc7ab32eb9f1314010db8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app