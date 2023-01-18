// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyebUjqLvgTeCbIte0dK30wCvn5qEQBLg",
    authDomain: "react-chatroom-single-room.firebaseapp.com",
    projectId: "react-chatroom-single-room",
    storageBucket: "react-chatroom-single-room.appspot.com",
    messagingSenderId: "271092696529",
    appId: "1:271092696529:web:edc5f8353cac4c64a80cf0",
    measurementId: "G-4CR00NLV30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);