// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF8cpmVSG-r7s3dqNBZZImzoFYMvqrEJU",
  authDomain: "inventory-tracker-c95fd.firebaseapp.com",
  projectId: "inventory-tracker-c95fd",
  storageBucket: "inventory-tracker-c95fd.appspot.com",
  messagingSenderId: "594582864900",
  appId: "1:594582864900:web:1fec59fb55394df501e151",
  measurementId: "G-5Q37FP2GK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore }