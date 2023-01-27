// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxDVgiLXJbVp4r17lTRZnmfG3UDWH2LIw",
  authDomain: "auth-23211.firebaseapp.com",
  projectId: "auth-23211",
  storageBucket: "auth-23211.appspot.com",
  messagingSenderId: "448381897663",
  appId: "1:448381897663:web:50ce07522eea03e4126f0a"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);