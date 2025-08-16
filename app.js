// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyABU8po0fZ9j9RLHukmgcprcNkVa3xqN88",
  authDomain: "hack-login-c15df.firebaseapp.com",
  projectId: "hack-login-c15df",
  storageBucket: "hack-login-c15df.appspot.com",
  messagingSenderId: "880409375787",
  appId: "1:880409375787:web:79b13c9ed10fc1708d266e",
  measurementId: "G-B65NJBP8NJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Email/Password Login
window.emailLogin = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login successful! Welcome " + user.email);
      console.log("Email login success:", user);
      // Redirect or update UI
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Email login error:", error.code, error.message);
      alert("Login failed: " + error.message);
    });
};

// Google Login
window.googleLogin = function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("Google Login Success! Welcome " + user.displayName);
      console.log("Google login success:", user);
      // Redirect or update UI
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Google login error:", error.code, error.message);
      alert("Google login failed: " + error.message);
    });
};

