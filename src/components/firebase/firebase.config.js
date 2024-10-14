// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDzcI16H86OUHqtW5HBGrOOkTHROd3Y4nI",
//   authDomain: "car-genious-b58ce.firebaseapp.com",
//   projectId: "car-genious-b58ce",
//   storageBucket: "car-genious-b58ce.appspot.com",
//   messagingSenderId: "731578435933",
//   appId: "1:731578435933:web:85af6897ed376f9fef00b4",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
