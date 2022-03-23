import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbuwOMO8fwE77PArAqkjQnGyJB6R2Ly3k",
  authDomain: "far-cry-6-96841.firebaseapp.com",
  projectId: "far-cry-6-96841",
  storageBucket: "far-cry-6-96841.appspot.com",
  messagingSenderId: "506693617284",
  appId: "1:506693617284:web:8520b019eb9e3dc93d24d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
