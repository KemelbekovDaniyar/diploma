// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaJMFLFbBLIJVL56iwAqSboQ_x82BWH4Q",
  authDomain: "diplom-daniyar.firebaseapp.com",
  projectId: "diplom-daniyar",
  storageBucket: "diplom-daniyar.appspot.com",
  messagingSenderId: "1057967555270",
  appId: "1:1057967555270:web:5a5550e3f4d33c566c0dc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export collections
export const categoryCollection = collection(db, "categories");
export const productsCollection = collection(db, "products");
export const ordersCollection = collection(db, "orders");