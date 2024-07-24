// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeE85PuUaOy_c-m-byrt82BfJj4yFbUPo",
  authDomain: "clabed-vehicle-images.firebaseapp.com",
  projectId: "clabed-vehicle-images",
  storageBucket: "clabed-vehicle-images.appspot.com",
  messagingSenderId: "639609369006",
  appId: "1:639609369006:web:5aae9489f29d7b756fd83f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default  storage ;