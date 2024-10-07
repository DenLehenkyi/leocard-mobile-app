// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgeW6HNhfy4Vb6m9FPgDFAMsNFjYOHSDQ",
  authDomain: "leokartapp.firebaseapp.com",
  projectId: "leokartapp",
  storageBucket: "leokartapp.appspot.com",
  messagingSenderId: "529685467000",
  appId: "1:529685467000:web:f48609bd5d7b4200e2828d",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
