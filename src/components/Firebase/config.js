// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBFAv46INMSHfvIwTTZMDZ32yzBUMhHiK0",
  authDomain: "rj-sergio.firebaseapp.com",
  projectId: "rj-sergio",
  storageBucket: "rj-sergio.appspot.com",
  messagingSenderId: "1017174410813",
  appId: "1:1017174410813:web:590b5a50637753d2810c54"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


