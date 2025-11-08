// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.MI_API_KEY,
  authDomain: process.env.MI_AUTH_DOMAIN,
  projectId: process.env.MI_PROYECT_ID,
  storageBucket: process.env.MI_STORAGE_BUCKET,
  messagingSenderId: process.env.MI_MESSAGING_SENDER_ID,
  appId: process.env.MI_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

