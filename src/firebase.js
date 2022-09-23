// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeNiZOsT5W025-pyeO4Hji_8ZPgOBx2jE",
  authDomain: "code-tips-61700.firebaseapp.com",
  projectId: "code-tips-61700",
  storageBucket: "code-tips-61700.appspot.com",
  messagingSenderId: "503060232360",
  appId: "1:503060232360:web:d4d713b59fa456a8562a9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();

export default app;
