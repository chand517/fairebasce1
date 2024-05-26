
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getAuth ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD682bP1pr7GVIsYzyaLMfhyAf66VA0f4w",
    authDomain: "rizwan-af8cb.firebaseapp.com",
    projectId: "rizwan-af8cb",
    storageBucket: "rizwan-af8cb.appspot.com",
    messagingSenderId: "891068650937",
    appId: "1:891068650937:web:91ce2b53bf330efbb6d268"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  // console.log(app)
  // console.log(auth)



  
  var button =document.getElementById('login')
  function login(){
var userEmail =document.getElementById('email').value
var userPassword =document.getElementById('pass').value
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
      window.location.href ='singin.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
    
  }
button.addEventListener('click',login);