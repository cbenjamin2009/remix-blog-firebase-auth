// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqstiocxKj1a0h9jCVzlsPCyILmHXsgk0",
  authDomain: "remix-blog-aut.firebaseapp.com",
  projectId: "remix-blog-aut",
  storageBucket: "remix-blog-aut.appspot.com",
  messagingSenderId: "247698534055",
  appId: "1:247698534055:web:a4625701c1059062a1b582"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }