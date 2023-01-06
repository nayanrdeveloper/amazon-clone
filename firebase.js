import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: process.env.FIRBASE_API_KEY,
    authDomain: "clone-edaed.firebaseapp.com",
    projectId: "clone-edaed",
    storageBucket: "clone-edaed.appspot.com",
    messagingSenderId: "935671437436",
    appId: process.env.APP_ID,
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;
