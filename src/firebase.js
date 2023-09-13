// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, writeBatch } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE00Uc45Vssw7Ynfu-OIO4ejNtXpyPE2M",
  authDomain: "simuda-guest-book.firebaseapp.com",
  projectId: "simuda-guest-book",
  storageBucket: "simuda-guest-book.appspot.com",
  messagingSenderId: "157226302938",
  appId: "1:157226302938:web:95f20af3262a7586dd54e3",
  measurementId: "G-K21DJ94CPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const batch = writeBatch(db);