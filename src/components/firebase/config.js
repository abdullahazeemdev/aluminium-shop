import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aluminium-shop.firebaseapp.com",
  projectId: "aluminium-shop",
  storageBucket: "aluminium-shop.firebasestorage.app",
  messagingSenderId: "924745873944",
  appId: "1:924745873944:web:9c0e7396eeeb00a131216d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);