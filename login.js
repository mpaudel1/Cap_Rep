// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtmKeONdjMGLBTgliSOEZugV7WclSHJVs",
  authDomain: "finance-website-5a5ac.firebaseapp.com",
  databaseURL: "https://finance-website-5a5ac-default-rtdb.firebaseio.com",
  projectId: "finance-website-5a5ac",
  storageBucket: "finance-website-5a5ac.appspot.com",
  messagingSenderId: "88023999850",
  appId: "1:88023999850:web:00f41ff780de9f6165f113",
  measurementId: "G-5XFFYYGGX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);








