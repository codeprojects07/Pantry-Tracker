// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7b-y5hGOjOmecshbyNkagjUCeD07Icuk",
  authDomain: "inventory-management-b3465.firebaseapp.com",
  projectId: "inventory-management-b3465",
  storageBucket: "inventory-management-b3465.appspot.com",
  messagingSenderId: "674190750182",
  appId: "1:674190750182:web:2fec10feade01af1666627",
  measurementId: "G-EX6CE9YGCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}