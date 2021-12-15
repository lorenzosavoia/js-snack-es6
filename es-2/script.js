
const arrayObj = [
{ name: 'Poppy', type: 'tshirt', color: 'red'},
{ name: 'Jumping', type: 'occhiali', color: 'blue' },
{ name: 'CrissCross', type: 'scarpe', color: 'black' },
{ name: 'Jenny', type: 'borsa', color: 'pink' },
];

const container = document.getElementById('container')


arrayObj.forEach(element => {
    element.age = getRndInteger(3,50);
});

for (let i = 0; i < arrayObj.length; i++) {
    const element = arrayObj[i];
    element[i].name           
    
}


console.log(arrayObj);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}