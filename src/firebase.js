import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpcPlXnDGxCECskkr3k6xfZqSqMyD7cyo",
  authDomain: "clone-8feee.firebaseapp.com",
  projectId: "clone-8feee",
  storageBucket: "clone-8feee.appspot.com",
  messagingSenderId: "19526488345",
  appId: "1:19526488345:web:ee5d7e97327d776f3ff588",
  measurementId: "G-GN9CM6SJGC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
