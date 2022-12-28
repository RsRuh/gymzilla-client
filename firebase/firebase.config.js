
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxXU1Ph5fXlgk1a40E17HUS9SSooNpiUw",
  authDomain: "gym-site-ruh.firebaseapp.com",
  projectId: "gym-site-ruh",
  storageBucket: "gym-site-ruh.appspot.com",
  messagingSenderId: "493168605609",
  appId: "1:493168605609:web:3616adffc1278daa412cb8"
};

const app = initializeApp(firebaseConfig);

export default app;