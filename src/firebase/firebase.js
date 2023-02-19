// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "react-coder-lgm.firebaseapp.com",
  projectId: "react-coder-lgm",
  storageBucket: "react-coder-lgm.appspot.com",
  messagingSenderId: "433780924976",
  appId: "1:433780924976:web:234da603b63c77215ac3f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(); //Querying DB

//Product CRUD
export const getProducts = async () => {
  const books = await getDocs(collection(db, "books"));
  const booksArray = books.docs.map((book) => {
    return { ...book.data(), id: book.id };
  });
  return booksArray;
};

/**
 * Seeds the firestorage
 */
export const seedDB = async () => {
  const booksFetch = await fetch("../json/books.json");
  const books = await booksFetch.json();
  books.forEach(async (book) => {
    await addDoc(collection(db, "books"), { book });
  });
};
