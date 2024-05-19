// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM5p6swNXB9QW9H-ayM0YFGjVopb0VCUE",
  authDomain: "finance-app-e53e4.firebaseapp.com",
  projectId: "finance-app-e53e4",
  storageBucket: "finance-app-e53e4.appspot.com",
  messagingSenderId: "414459629404",
  appId: "1:414459629404:web:192e5e2662240e92a1fb99",
  measurementId: "G-0VZKQZ78H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider, doc, setDoc};