import{initializeApp} from "firebase/app";
import{getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

// =================================================================================== //

function getBooks(){
    const db = getDatabase();
    const dbRef = push(ref(db, 'books'));

    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
    });
}

function update(data){
    if(data){

    }
}

// =================================================================================== //

const booksContainer = document.getElementById("booksContainer");
