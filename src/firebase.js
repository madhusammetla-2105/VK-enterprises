/* ===== Firebase Client Configuration ===== */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace these placeholders with your actual Firebase Project keys from the Firebase Console:
// Settings (cog icon) > Project Settings > General > Your Apps > Web Apps (Add app if none exists)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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
