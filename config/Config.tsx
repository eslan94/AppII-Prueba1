// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0WwgrbhZfK3_WGTYH7wk-dQg--lU4BrQ",
  authDomain: "app-one-8c953.firebaseapp.com",
  databaseURL: "https://app-one-8c953-default-rtdb.firebaseio.com",
  projectId: "app-one-8c953",
  storageBucket: "app-one-8c953.appspot.com",
  messagingSenderId: "413837160448",
  appId: "1:413837160448:web:860e6df90527cd7a5ba8e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);