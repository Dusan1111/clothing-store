// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  getAdditionalUserInfo,
  getAuth,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-5pVdKj3M9YHJ-jbEXSpVs0plVjYaY-Q",
  authDomain: "clothing-store-e4e15.firebaseapp.com",
  projectId: "clothing-store-e4e15",
  storageBucket: "clothing-store-e4e15.appspot.com",
  messagingSenderId: "1025601033058",
  appId: "1:1025601033058:web:2d4732edda350d020d923b",
  measurementId: "G-874BR315RT",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }
  console.log(userSnapshot);

  console.log(userSnapshot.exists);
};
