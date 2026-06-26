/* ===== Firebase Client Configuration ===== */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Check Vite environment variables first, falling back to placeholders:
const firebaseConfig = {
  apiKey: (import.meta.env && import.meta.env.VITE_FIREBASE_API_KEY) || "YOUR_API_KEY",
  authDomain: (import.meta.env && import.meta.env.VITE_FIREBASE_AUTH_DOMAIN) || "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: (import.meta.env && import.meta.env.VITE_FIREBASE_PROJECT_ID) || "YOUR_PROJECT_ID",
  storageBucket: (import.meta.env && import.meta.env.VITE_FIREBASE_STORAGE_BUCKET) || "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: (import.meta.env && import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID) || "YOUR_SENDER_ID",
  appId: (import.meta.env && import.meta.env.VITE_FIREBASE_APP_ID) || "YOUR_APP_ID"
};

let db = null;
let isFirebaseConfigured = false;

// Check if user has entered real keys
if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY") {
  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    isFirebaseConfigured = true;
    console.log("Firebase Firestore successfully initialized.");
  } catch (error) {
    console.error("Firebase database initialization failed:", error);
  }
} else {
  console.warn("Firebase keys are not configured. VK Enterprises is running in localStorage fallback mode.");
}

export { db, isFirebaseConfigured };
