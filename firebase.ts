// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAt6GaS5rZNxXLSaNf7QsDzR14akBQKNcU",

  authDomain: "ganchat-dd078.firebaseapp.com",

  projectId: "ganchat-dd078",

  storageBucket: "ganchat-dd078.appspot.com",

  messagingSenderId: "728824725279",

  appId: "1:728824725279:web:4a49173d576f72e59aba2a",

  measurementId: "G-TBX6YY8S41"

};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
