import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initializeApp } from 'firebase/app';
import  firebaseConfig  from "./firebaseConfig.js"; //Import firebaseConfig object


// Initialize Firebase BEFORE rendering the app
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)