// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRW_yewx0ULWzoqZrgUxP94L8OGVvqQGQ",
  authDomain: "todolistapp-930a9.firebaseapp.com",
  projectId: "todolistapp-930a9",
  storageBucket: "todolistapp-930a9.appspot.com",
  messagingSenderId: "1041245264815",
  appId: "1:1041245264815:web:c2e4efe31a62af0f4cad5a",
  measurementId: "G-JSF8VBCZ7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);