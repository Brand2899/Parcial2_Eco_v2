import{initializeApp} from "firebase/app";
import {getFirebaseConfig} from "./firebase-config";
import{getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth = getAuth();

// =================================================================================== //

function login(e, event){
    signInWithEmailAndPassword(auth, email.value, password.value).then((userCredentials) => {
        console.log(userCredentials);

        window.location.href = "vote.html";
    }).catch((error) => {
        console.log(error.message);
    });
}

// =================================================================================== //

const email = document.getElementById("in_Email");
const password = document.getElementById("in_Password");
const bnlogin = document.getElementById("bn_Login");

bnlogin.addEventListener("click", login);