// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional








const firebaseConfig = {
  apiKey: "AIzaSyALfc-YUfV99lWXDxdyyiN42zxkBhmZW6Q",
  authDomain: "quickmechanic-india.firebaseapp.com",
  projectId: "quickmechanic-india",
  storageBucket: "quickmechanic-india.appspot.com",
  messagingSenderId: "607535478846",
  appId: "1:607535478846:web:95fadd05590c0fffe4396f",
  measurementId: "G-KTKJQ2ZX43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const auth=getAuth(app);
const storage=getStorage(app);
// const mechanics=collection(db,"mechanics");
// const sosList=collection(db,"sos");

export {db,auth,storage};
