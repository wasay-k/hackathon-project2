// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByLBVVKG2up3ys-A1cY_t8j44u_FSNTi0",
  authDomain: "hackathon-project-3af77.firebaseapp.com",
  projectId: "hackathon-project-3af77",
  storageBucket: "hackathon-project-3af77.appspot.com",
  messagingSenderId: "155167442326",
  appId: "1:155167442326:web:60b2d1d61ec9c6975889b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
