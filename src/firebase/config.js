
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDvz81pvfTux4cJXAGipKUykIRmzVsu0CM",
    authDomain: "jam-ecomaster.firebaseapp.com",
    projectId: "jam-ecomaster",
    storageBucket: "jam-ecomaster.firebasestorage.app",
    messagingSenderId: "433811849996",
    appId: "1:433811849996:web:9032cbc87a68ea2fdeff29",
    measurementId: "G-VS5LF9L1RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
