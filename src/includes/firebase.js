import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAtpuFumNQn50z2UCYFGvOb5QdqgLFQBYs",
  authDomain: "fashionblogs-a5e58.firebaseapp.com",
  projectId: "fashionblogs-a5e58",
  storageBucket: "fashionblogs-a5e58.appspot.com",
  messagingSenderId: "211744205202",
  appId: "1:211744205202:web:40cb78600f16c7a20df94b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
export { db, auth };
