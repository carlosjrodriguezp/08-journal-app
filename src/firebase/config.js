// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzeIsMPIC-XhRs4p_2OQnh1BycAowTer4",
  authDomain: "react-cursos-a47fa.firebaseapp.com",
  projectId: "react-cursos-a47fa",
  storageBucket: "react-cursos-a47fa.appspot.com",
  messagingSenderId: "272366782094",
  appId: "1:272366782094:web:90ac2daa9018e5c17a6bdf",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
