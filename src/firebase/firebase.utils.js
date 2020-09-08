import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBU0UQANoFsHL8uIQrBJ-8cVIz8bHO0WQQ",
  authDomain: "maricel-db.firebaseapp.com",
  databaseURL: "https://maricel-db.firebaseio.com",
  projectId: "maricel-db",
  storageBucket: "maricel-db.appspot.com",
  messagingSenderId: "118914157276",
  appId: "1:118914157276:web:7fda7da98c3ea723dc0219",
  measurementId: "G-0WDZ5SG6NJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
