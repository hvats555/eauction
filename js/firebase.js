import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoXJojvN6R_qSLa6DywK4JDjxEcyVdi4c",
  authDomain: "auction-1e851.firebaseapp.com",
  projectId: "auction-1e851",
  storageBucket: "auction-1e851.appspot.com",
  messagingSenderId: "699918276720",
  appId: "1:699918276720:web:10b000e075215ddbd8bcb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
