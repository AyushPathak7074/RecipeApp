import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg3G9LTy1ll6DgIy4YYYSgvy1s0exWw8g",
  authDomain: "recipeapp-2-5c558.firebaseapp.com",
  projectId: "recipeapp-2-5c558",
  storageBucket: "recipeapp-2-5c558.appspot.com",
  messagingSenderId: "488474061883",
  appId: "1:488474061883:web:13b5ca3b12bec4c6ea001e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app); 