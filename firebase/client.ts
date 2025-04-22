
import {initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHjdyE-0j5umJrfhCmj5moj9ijXawQitI",
    authDomain: "prepwise-ff4bd.firebaseapp.com",
    projectId: "prepwise-ff4bd",
    storageBucket: "prepwise-ff4bd.firebasestorage.app",
    messagingSenderId: "141041043171",
    appId: "1:141041043171:web:5bee19c826bbcb78a4a7d6",
    measurementId: "G-N0KDGDYLZZ"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
