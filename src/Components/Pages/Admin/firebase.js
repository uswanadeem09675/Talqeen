// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5Cs8UCDZe3Q8eE2-OVsgMGGa9svJTSB8",
  authDomain: "talqueen.firebaseapp.com",
  projectId: "talqueen",
  storageBucket: "talqueen.appspot.com",
  messagingSenderId: "910304334734",
  appId: "1:910304334734:web:2134515b1f6b0653924adf",
  measurementId: "G-PZW8K6EYEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);