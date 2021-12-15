// Scrivere una funzione(e lanciarla : razzo: ) che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// array di numeri

let container = document.getElementById('container')
// // const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let fine = myFunction(numeri, 3, 8)

// container.innerHTML = `<h1> questi sono i tuoi numeri ${fine} </h1>`


// function myFunction(array, a, b) {
//     let result = array.filter((idx) => idx > a && idx < b)
//     return result
// }


// array di lettere

const lettere = ['a','b','c','d','e','f','g','h']

let result = myFunction(lettere,2,8)
// console.log(result);
container.innerHTML = `<h1> questi sono le tue lettere ${result} </h1>`


function myFunction(array, a, b) {
    let arrayCut = array.filter((element, i) => {
        return i > a && i < b;
    });
    return arrayCut;
}