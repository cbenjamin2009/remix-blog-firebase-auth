import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhab0G2GmrgoWEngBHRudaOhSrlr2d8_4",
    authDomain: "remix-auth-tutorial.firebaseapp.com",
    projectId: "remix-auth-tutorial",
    storageBucket: "remix-auth-tutorial.appspot.com",
    messagingSenderId: "496814825666",
    appId: "1:496814825666:web:99246e28f282e9b3f2db5b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }