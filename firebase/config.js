// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeSdiF4ztmu5-GjnNlwdWNoSGDLuSsIlA",
    authDomain: "next-firebase-starterkit.firebaseapp.com",
    projectId: "next-firebase-starterkit",
    storageBucket: "next-firebase-starterkit.appspot.com",
    messagingSenderId: "872591892496",
    appId: "1:872591892496:web:9a539f5541432b789baa95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db } 