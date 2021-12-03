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
        let bookName = document.createElement("p");
        bookName.className = "bookName";
        bookName.innerHTML = this.book.bookName;

        // Puntaje del libro
        let scoreBook = document.createElement('h4');
        scoreBook.className = "bookScore";
        scoreBook.innerHTML = this.book.score;

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

            const dbRef = ref(db, 'books/' + this.book.id + '/num_votes');
            set(dbRef, this.book.numVotes + 1);

            const dbref = ref(db, 'books/' + this.book.id + '/score');
            set(dbref, (this.books.score + 1)/this.book.numVotes);
        });

        // 2 Estrella
        bn1Star.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const dbref = ref(db, 'books/' + this.book.id + '/score');
            set(dbref, (this.books.score + 2)/this.book.numVotes);
        });

        // 3 Estrella
        bn1Star.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const dbref = ref(db, 'books/' + this.book.id + '/score');
            set(dbref, (this.books.score + 3)/this.book.numVotes);
        });

        // 4 Estrella
        bn1Star.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const dbref = ref(db, 'books/' + this.book.id + '/score');
            set(dbref, (this.books.score + 4)/this.book.numVotes);
        });

        // 5 Estrella
        bn1Star.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const dbref = ref(db, 'books/' + this.book.id + '/score');
            set(dbref, (this.books.score + 5)/this.book.numVotes);
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