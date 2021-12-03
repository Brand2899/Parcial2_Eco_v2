import{initializeApp} from "firebase/app";
import{getDatabase, ref, onValue, push} from "firebase/database";
import { bookComp } from "./bookComp";

import {getFirebaseConfig} from "./firebase-config";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

// =================================================================================== //

const booksContainer = document.getElementById("booksContainer");

function getBooks(){
    const db = getDatabase();
    const dbRef = ref(db, 'books');

    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        update(data);
    });
}

function update(data){
    if(data){

        booksContainer.innerHTML = "";

        Object.keys(data).forEach((k, index) => {
            console.log(k, index);
            const book = new bookComp(data[k]);

            booksContainer.appendChild(book.render());
        });
    }
}

// =================================================================================== //

getBooks();
