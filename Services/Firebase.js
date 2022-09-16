// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK6JCZCajZOmz0_KYiSmU63ThfD7tlLLo",
  authDomain: "stately-arbor-362019.firebaseapp.com",
  projectId: "stately-arbor-362019",
  storageBucket: "stately-arbor-362019.appspot.com",
  messagingSenderId: "545887643775",
  appId: "1:545887643775:web:c2fc3c03af8a927e4d374a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);