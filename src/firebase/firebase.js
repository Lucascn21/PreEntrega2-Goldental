// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

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

export const getProductById = async (id) => {
  const book = await getDoc(doc(db, "books", id));
  const bookObject = { ...book.data(), id: book.id };
  return bookObject;
};

export const getProductByName = async (name) => {
  const citiesRef = collection(db, "books");
  const parsedName = name.split("-")[0]; //name comes in a name-route format
  const capitalizedName = parsedName.replace(/(^\w|\s\w)/g, (m) =>
    m.toUpperCase()
  );
  const q = query(citiesRef, where("itemName", "==", capitalizedName));
  const querySnapshot = await getDocs(q);
  let result;
  querySnapshot.forEach((doc) => {
    result = { ...doc.data(), id: doc.id };
  });
  return result;
};
export const updateProductById = async (id, updatedData) => {
  await updateDoc(doc(db, "books", id), updatedData);
};

export const deleteProductById = async (id) => {
  await deleteDoc(doc(db, "books", id));
};

//Orders
export const createBuyOrder = async ({
  clientData,
  cart,
  totalprice,
  currentDate,
}) => {
  let cartItemsIdArray = [];
  for (const itemInCart of cart) {
    cartItemsIdArray.push({
      id: itemInCart.id,
      quantity: itemInCart.quantityInCart,
    });
  }
  const buyOrder = await addDoc(collection(db, "buyOrders"), {
    clientData,
    cartItemsIdArray,
    totalprice,
    currentDate,
  });
  return buyOrder;
};

export const getBuyOrderById = async (id) => {
  const buyOrder = await getDoc(doc(db, "buyOrders", id));
  const buyOrderObject = { ...buyOrder.data(), id: buyOrder.id };
  return buyOrderObject;
};

/**
 * Seeds the firestorage
 */
export const seedDB = async () => {
  const booksFetch = await fetch("../json/books.json");
  const books = await booksFetch.json();
  books.forEach(async (book) => {
    await addDoc(collection(db, "books"), { ...book });
  });
};

export const restockItems = async () => {
  const booksFetch = await fetch("../json/books.json");
  const books = await booksFetch.json();
  books.forEach(async (book) => {
    let { id } = await getProductByName(book.itemName, book);
    updateProductById(id, book);
  });
};
