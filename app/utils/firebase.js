import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIOr7J-wUQrc3NF-q8hq1ys2g_zOIThxA",
  authDomain: "remix-blog-test.firebaseapp.com",
  projectId: "remix-blog-test",
  storageBucket: "remix-blog-test.appspot.com",
  messagingSenderId: "973022500535",
  appId: "1:973022500535:web:3729728efd750be88e1f32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }