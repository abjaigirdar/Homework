// Two arrays to work with:
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

// Every

// Determine if every number is greater than or equal to 0
nums.forEach((element) => {
  if (element >= 0) {
    console.log(`${element} is greater than pr equal to 0`);
  } else {
    console.log(`${element} is less than 0`);
  }
});

// determine if every word shorter than 8 characters
panagram.forEach((word) => {
  if (word.length < 8) {
    console.log(`${word} is shorter than 8 characters`);
  } else {
    console.log(`${word} is longer than or equal to 8 character`);
  }
});

// Filter

// filter the array for numbers less than 4
const filteredNums = nums.filter((nums) => nums < 4);
console.log(filteredNums);

// filter words that have an even length
const filteredPanagram = panagram.filter(
  (panagram) => panagram.length % 2 === 0
);
console.log(filteredPanagram);

// Find

// Find the first value divisible by 5
const firstNumber = nums.find((number) => number % 5 === 0);
console.log(firstNumber);

// find the first word that is longer than 5 characters
const firstWord = panagram.find((word) => word.length > 5);
console.log(firstWord);

// Find Index

// find the index of the first number that is divisible by 3
const indexOfFirstNumber = nums.findIndex((number) => number % 3 === 0);
console.log(indexOfFirstNumber);

// find the index of the first word that is less than 2 characters long
const indexOfFirstWord = panagram.findIndex((word) => word.length < 2);
console.log(indexOfFirstWord);

// For Each

// console.log each value of the nums array multiplied by 3
nums.forEach((number) => console.log(number * 3));

// console.log each word with an exclamation point at the end of it
panagram.forEach((word) => console.log(`${word}!`));

// Map

// make a new array of each number multiplied by 100
const multipliedArray = nums.map((number) => number * 100);
console.log(multipliedArray);

// make a new array of all the words in all uppercase
const UppercaseArray = panagram.map((word) => word.toUpperCase());
console.log(UppercaseArray);

// Some

// Find out if some numbers are divisible by 7
const divisibleBySeven = (number) => number % 7 === 0;
console.log(nums.some(divisibleBySeven));

// Find out if some words have the letter 'a' in them
const letterA = (word) => word.includes("a");
console.log(panagram.some(letterA));

//// Hungry for More ////

// Reduce

// Add all the numbers in the array together using the reduce method
const initialValue = 0;
const numsSum = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(numsSum);

// concatenate all the words using reduce
const concatenatePanagram = panagram.reduce(
  (accumulator, currentValue) => accumulator + " " + currentValue
);
console.log(concatenatePanagram);
// Sort

// Try to sort without any arguments, do you get what you'd expect with the numbers array?
console.log(nums.sort());

// Try to sort without any arguments, do you get what you'd expect with the words array?
console.log(panagram.sort());

// Sort the numbers in ascending order
console.log(nums.sort((a, b) => a - b));

// Sort the numbers in descending order
console.log(nums.sort((a, b) => b - a));

// Sort the words in ascending order
console.log(panagram.sort((a, b) => (a > b ? 1 : -1)));

// Sort the words in descending order
console.log(panagram.sort((a, b) => (a < b ? 1 : -1)));

// Array Methods Challenge Problems
// isPanagram

// Test whether each letter a-z (case insensitive) is used at least once
let arrg = "abcdefghijklmnopqrstuvwxyz";
let alphabetArray = arrg.split(""); // converting it to an array
const panagramToLowerCase = panagram.map((element) => element.toLowerCase());

const checker = (arr, target) => target.every((v) => arr.includes(v));
console.log(checker(panagramToLowerCase, alphabetArray));

// Working with data

const products = [
  {
    name: "allen wrench",
    price: 2.99,
    description: "handy tool",
  },
  {
    name: "cornucopia",
    price: 5.99,
    description: "festive holiday decoration",
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium",
  },
  {
    name: "guillotine (cigar)",
    price: 10.59,
    description: "behead your stub",
  },
  {
    name: "jack-o-lantern",
    price: 3.99,
    description: "spooky seasonal fun",
  },
  {
    name: "doggie treat (box)",
    price: 5.99,
    description: "fido loves 'em",
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites",
  },
  {
    name: "LED lightbulb",
    price: 6.55,
    description: "It's super-efficient!",
  },
  {
    name: "owl pellets",
    price: 3.99,
    description: "Don't ask what they used to be.",
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze",
  },
  {
    name: "hair brush",
    price: 6.99,
    description: "fine boar bristles",
  },
  {
    name: "iridium (one gram)",
    price: 19.36,
    description: "corrosion-resistant metal",
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small",
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black",
  },
  {
    name: "kaleidoscope",
    price: 8.25,
    description: "tube with moving plastic pieces inside",
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized",
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle...",
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in.",
  },
  {
    name: "pincushion",
    price: 1.99,
    description: "You'll get 'stuck' on it",
  },
];

// filter for products with a price that is less than 10, using the array below:
products.forEach((element) => {
  if (element.price < 10) {
    console.log(element);
  }
});

// sort alphabetically by product name
console.log(products.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)))