// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIkCWlT-QSo9erV7wRQh_IuouGEI-B0XE",
  authDomain: "fooddeliveryapp-ace1e.firebaseapp.com",
  projectId: "fooddeliveryapp-ace1e",
  storageBucket: "fooddeliveryapp-ace1e.appspot.com",
  messagingSenderId: "858403474881",
  appId: "1:858403474881:web:44b37ed123724a0f7e3340",
  measurementId: "G-WEBDJH4NQG"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);