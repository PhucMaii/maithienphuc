// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "portfolio-993c5.firebaseapp.com",
    projectId: "portfolio-993c5",
    storageBucket: "portfolio-993c5.appspot.com",
    messagingSenderId: "123606693458",
    appId: "1:123606693458:web:2ae954955fba81e42f518b",
    measurementId: "G-WDSZQPTP0K"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const db = getFirestore();
const storage = getStorage();
const functions = getFunctions();
export { auth, googleProvider, db, storage, functions };