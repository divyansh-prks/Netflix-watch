// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "neflixapp-cbe78.firebaseapp.com",
  projectId: "neflixapp-cbe78",
  storageBucket: "neflixapp-cbe78.appspot.com",
  messagingSenderId: "290036749267",
  appId: "1:290036749267:web:0ac4a512ab4243e6e89526",
  measurementId: "G-LS6869GH54"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log(analytics)

export const auth = getAuth();

