import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3zUsD8aM1UA6vkfP4saAbW-PT8lh32YM",
  authDomain: "internship1-3-9242c.firebaseapp.com",
  databaseURL: "https://internship1-3-9242c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "internship1-3-9242c",
  storageBucket: "internship1-3-9242c.appspot.com",
  messagingSenderId: "178268109010",
  appId: "1:178268109010:web:3a19badd79cce79bd2150b",
  measurementId: "G-YRWCLCGFF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);