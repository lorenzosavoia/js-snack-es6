// Scrivere una funzione(e lanciarla : razzo: ) che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

let container = document.getElementById('container')
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let fine = myFunction(numeri, 3, 8)
// let fine2 = myFunction(numeri, 1, 4)

container.innerHTML = `<h1> questi sono i tuoi numeri ${fine} </h1>`

// console.log(fine,fine2);


function myFunction(array, a, b) {
    let result = array.filter((idx) => idx > a && idx < b)
    return result
}

// function myFunction(array,min, max) {

//     let result = array.filter((min , max)=>{


//     });
//     return result

// }


// let risultato = myFunction(numeri,3,7);

// console.log(risultato);

// var numbers = [1, 2, 3, 4, 5];
// var filtered = numbers.filter(function (x) { return x > 3; });

// // As a JavaScript 1.8 expression closure
// filtered = numbers.filter(function (x) x > 3);

// let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numeri.length; i++) {

//     const element = numeri[i];
//     console.log(element);

//     if (numeri[i] < array.length) {
        
//     }
    
// }


// months = months.filter((pippo) => pippo > 2 => patatine)
// console.log(months);


