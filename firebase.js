import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaAW2VrYv_Ozni0o8H3TsaHSJ4fuwkNUc",
  authDomain: "react-note-app-58a8b.firebaseapp.com",
  projectId: "react-note-app-58a8b",
  storageBucket: "react-note-app-58a8b.appspot.com",
  messagingSenderId: "332217594611",
  appId: "1:332217594611:web:64b0f07587c2f3d0eb3d86",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
