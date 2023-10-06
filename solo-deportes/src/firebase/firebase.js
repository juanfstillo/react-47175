import { initializeApp } from "firebase/app";
import {
  doc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  query,
  where,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA12gJ0NQ9y86wBdMbOnZW0FSOzgFXuCBE",
  authDomain: "react-47175.firebaseapp.com",
  projectId: "react-47175",
  storageBucket: "react-47175.appspot.com",
  messagingSenderId: "118309862855",
  appId: "1:118309862855:web:dbd1c196bc3b1f5b05ade2",
  measurementId: "G-HZC254NLVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const getProducto = async (id) => {
  const item = await getDoc(doc(db, "products", id));
  return item;
};

const getProductos = async () => {
  const productos = await getDocs(collection(db, "products"));
  return productos;
};

const getProductosPorCategoria = async (categoria) => {
  const productos = await query(
    collection(db, "products"),
    where("categoria", "==", categoria)
  );
  const col = await getDocs(productos);
  return col;
};

const genOrder = async (data) => {
  const col = collection(db, "orders");
  const order = await addDoc(col, data);
  return order;
};

export {
  db,
  app,
  getProducto,
  getProductos,
  getProductosPorCategoria,
  genOrder,
};
