// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_1,
  authDomain: import.meta.env.VITE_2,
  projectId: import.meta.env.VITE_3,
  storageBucket: import.meta.env.VITE_4,
  messagingSenderId : import.meta.env.VITE_5,
  appId: import.meta.env.VITE_6,
  measurementId: import.meta.env.VITE_7,




};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)