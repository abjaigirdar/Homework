/*
// Multiple 0f 3
let x = 0;
while(x < 35) {
    if ( x % 3 === 0) {
    console.log(x);
    }
    x++
}

// if Multiple 0f 2, multiply by 3
let y = 0;
while(y < 35) {
    if ( y % 2 === 0) {
    console.log(y * 3);
    }
    y++
}


let bill = 10;
let cookie = 4;
let quartersInDollar = 4;
while(cookie < bill) {
    let remainder = bill - cookie;
    let total = remainder * quartersInDollar;
    console.log(total);
    cookie++
}


const quartersConversion = (bill, cookie) => {
    let remainder = 0;
    let total = 0;
    let quartersInDollar = 4
    while( cookie < bill) {
        remainder = bill - cookie;
        total = remainder * quartersInDollar;
        cookie++
        return total;
    }
}
console.log(quartersConversion(20, 2))
*/

/*
// Fizz Buzz:
Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

const cards = ['diamond', 'spade', 'heart', 'club']
let currentCard;

while(currentCard != 'spade'){
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard)
}