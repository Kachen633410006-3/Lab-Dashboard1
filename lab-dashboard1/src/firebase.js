// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5DfzhWiBKeheokGzJB2pnNy-mHfEs2zM",
  authDomain: "cartoon-f49d5.firebaseapp.com",
  databaseURL: "https://cartoon-f49d5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cartoon-f49d5",
  storageBucket: "cartoon-f49d5.appspot.com",
  messagingSenderId: "353158526527",
  appId: "1:353158526527:web:f0874a858c7f733fe7ea8a",
  measurementId: "G-K1SRNJSBNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db}