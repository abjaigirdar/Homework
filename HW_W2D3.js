
// Challenge: While Loops - Fundamentals
let count = 2
while(count < 8) {
    count++
}
console.log(count)
// Challenge: While Loops - Conditional Expression
let addThis = 0;
let sum = 0;
while(addThis < 10){
  sum += addThis
  addThis++
}
console.log(sum)

// Challenge: Control Flow - if statements
const num = 40;
let final;
if(num > 100){
    final == null
} else {
    final = num * 2
}
console.log(final)

// Challenge: fizzbuzz
let fb = [];

  for (let i = 1; i <= 17; i++) {
    if (i % 5 === 0 && i % 3 === 0) fb.push("FizzBuzz");
    else if (i % 3 === 0) fb.push("Fizz");
    else if (i % 5 === 0) fb.push("Buzz");
    else fb.push(i);
  };
console.log(fb);



