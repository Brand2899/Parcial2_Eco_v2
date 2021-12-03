import { getDatabase, ref, push, set } from 'firebase/database';

export class bookComp{
    constructor(book){
        this.book = book;
    }

    render(){
        // Componente Padre
        let comp = document.createElement("div");
        comp.className = "component";


        // Nombre del libro
        let bookName = document.createElement("h4");
        bookName.className = "bookName";
        bookName.innerHTML = this.book.bookName;

        // Puntaje del libro
        let scoreBook = document.createElement('h1');
        scoreBook.className = "bookScore";
        scoreBook.innerHTML = this.book.score;

        // Numero de votos
        let numVotesBook = this.book.num_votes;

        // Boton 1 estrella
        let bn1Star = document.createElement('button');
        bn1Star.className = "bn_1Star";
        bn1Star.innerHTML = "1";

        // Boton 2 estrella
        let bn2Star = document.createElement('button');
        bn2Star.className = "bn_2Star";
        bn2Star.innerHTML = "2";

        // Boton 3 estrella
        let bn3Star = document.createElement('button');
        bn3Star.className = "bn_3Star";
        bn3Star.innerHTML = "3";

        // Boton 4 estrella
        let bn4Star = document.createElement('button');
        bn4Star.className = "bn_4Star";
        bn4Star.innerHTML = "4";

        // Boton 5 estrella
        let bn5Star = document.createElement('button');
        bn5Star.className = "bn_5Star";
        bn5Star.innerHTML = "5";

        
        // Evento sumar puntaje
        // 1 Estrella
        bn1Star.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const dbRef = ref(db, 'students/' + this.book.id + '/score');
            var valueNew = parseInt(scoreBook + 1);
            set(dbRef, valueNew);
        });

        // 2 Estrella
        bn2Star.addEventListener("click", (e, ev) => {
            if(isNaN(this.book.scoreBook)){
                console.log("Oh no 2");
            }
        });

        // 3 Estrella
        bn3Star.addEventListener("click", (e, ev) => {
            if(isNaN(this.book.scoreBook)){
                console.log("Oh no 3");
            }
        });

        // 4 Estrella
        bn4Star.addEventListener("click", (e, ev) => {
            if(isNaN(this.book.scoreBook)){
                console.log("Oh no 4");
            }
            return;
        });

        // 5 Estrella
        bn5Star.addEventListener("click", (e, ev) => {
            if(isNaN(this.book.scoreBook)){
                console.log("Oh no 5");
            }
        });

        comp.appendChild(bookName);
        comp.appendChild(scoreBook);

        comp.appendChild(bn1Star);
        comp.appendChild(bn2Star);
        comp.appendChild(bn3Star);
        comp.appendChild(bn4Star);
        comp.appendChild(bn5Star);

        return comp;
    }
}