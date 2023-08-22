
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeXYHPhOwVCbuIpwi9rKK83FCfn_3gD-U",
  authDomain: "citasiobella.firebaseapp.com",
  projectId: "citasiobella",
  storageBucket: "citasiobella.appspot.com",
  messagingSenderId: "516097273306",
  appId: "1:516097273306:web:487cde8cf01290a49924e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);