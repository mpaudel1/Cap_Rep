import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtmKeONdjMGLBTgliSOEZugV7WclSHJVs",
  authDomain: "finance-website-5a5ac.firebaseapp.com",
  databaseURL: "https://finance-website-5a5ac-default-rtdb.firebaseio.com",
  projectId: "finance-website-5a5ac",
  storageBucket: "finance-website-5a5ac.appspot.com",
  messagingSenderId: "88023999850",
  appId: "1:88023999850:web:00f41ff780de9f6165f113",
  measurementId: "G-5XFFYYGGX8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login_btn = document.getElementById('login_button');

login_btn.addEventListener('click', function() {
  const loginEmail = document.getElementById('login_email').value; 
  const loginPass = document.getElementById('login_password').value;

  signInWithEmailAndPassword(auth, loginEmail, loginPass)
  .then((userCredential) => {

    const user = userCredential.user;
    document.getElementById('result-box').style.display='inline';
    document.getElementById('login-box').style.display='none';

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});




