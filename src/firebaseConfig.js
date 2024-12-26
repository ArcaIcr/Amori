// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Firestore method

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIcjUMeXm7zmeQyj0j8FZJabv344acsUI",
  authDomain: "amori-c2a17.firebaseapp.com",
  projectId: "amori-c2a17",
  storageBucket: "amori-c2a17.firebasestorage.app",
  messagingSenderId: "591284992948",
  appId: "1:591284992948:web:e8a59a3b335ed39c7c50e1",
  measurementId: "G-8F1PNBFJPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export the Firestore instance
