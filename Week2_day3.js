
// Challenge: For Loops
let countDown = 10;
for(let i=1; i <= 10; i++){
    countDown--
}
console.log(countDown)

//Challenge: For Loops and Arrays
const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// part 1
for(let i=0; i< synonyms.length; i++) {
    greetings.push(`Have a ${synonyms[i]} day`)
}
// part 2
for(let i=0; i <greetings.length; i++){
    console.log(greetings[i])
}

// Challenge: For Loops and Array Indices
const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];
const bios = [];

for(let i = 0; i < firstNames.length; i++){
    bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`)
}
console.log(bios);


// Challenge: For Loops - Calculating Array Elements
const increaseByTwo = [1, 2, 3, 4, 5];

for(let i=0; i<increaseByTwo.length; i++){
    increaseByTwo[i] +=2
}
console.log(increaseByTwo)

