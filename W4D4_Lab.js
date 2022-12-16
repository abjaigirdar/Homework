// ===================================================================================
// Section 1
// ===================================================================================

class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`${this.name} says hello!`);
  }
  eat(number) {
    this.weight += number;
    this.mood += number;
  }
  exercise(number) {
    this.weight -= number;
  }
  ageUp(number) {
    this.age += number;
    this.height += number;
    this.weight += number;
    this.mood -= number;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    if (this.bankAccount >= hamster.getPrice()) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.getPrice();
      return `Hamster purchase was successfull!`;
    } else {
      return `You ain't got enough mullah!`;
    }
  }
}

const timmy = new Person("Timmy");
timmy.ageUp(5);
timmy.eat(5);
timmy.exercise(5);
timmy.ageUp(9);

const gus = new Hamster("Gus");
gus.owner = "Timmy";
timmy.buyHamster(gus);
timmy.ageUp(15);
timmy.eat(2);
timmy.exercise(2);

// ===================================================================================
// Chef Make Dinners
// ===================================================================================

class Dinner{
  constructor(appetizer, entree, dessert, dinnerNumber){
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
    this.dinnerNumber = dinnerNumber;
  }
}

class Chef{
  constructor(appetizer, entree, dessert){
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
    this.dinners = [];
  }
  makeDinner(){
    const newDinner = new Dinner(this.appetizer, this.entree, this.dessert, this.dinners.length)
    this.dinners.push(newDinner);
  }
}

const ramsey = new Chef("Chana Chaat", "Kachchi Biryani", "Gajar ka Halwa");
ramsey.makeDinner();
ramsey.makeDinner();
ramsey.makeDinner();
// console.log(ramsey)

// ===================================================================================
// I. Variables & Datatypes
// ===================================================================================

/*
A. Q + A
How do we assign a value to a variable? let somevar = 10
How do we change the value of a variable? somevar = 12
How do we assign an existing variable to a new variable? let newvar = somevar
Remind me, what are declare, assign, and define? no wrong answers, they should show an understanding of how to use these words
-> declare is when we declare a variable,
-> assign is when we assign a value to a variable
-> define is when we declare as well as assign a value to a variable
What is pseudocoding and why should you do it? no wrong answers but they should understand that psuedo code is not code its plain english description of what they want to accomplish.
-> it's a blueprint or wireframing in plain english before actually coding. 
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? no wrong answers but they should defend what they say
-> 20% of the time planning and 80% of the time coding
*/

/*
// B. Strings
// Create a variable called firstVariable
let firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// Change the value of this variable to some number
firstVariable = 8;
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariableto any string.
secondVariable = "a string"
// What is the value of firstVariable?
8
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let yourName = "Shahrukh";
console.log(`Hello, my name is ${yourName}`)
*/


/*
// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console answer below

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');
*/

/*
// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

let animal = "cow";
if(animal === "cow"){
  console.log("moooooo")
}else{
  console.log("Hey! You're not a cow.")
}
*/


/*
// E. Driver's Ed
// Make a variable that holds a person's age; be semantic let personAge
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
let personAge = 9
if(personAge >= 16){
console.log("Here are the keys!")
} else {
console.log("Sorry, you're too young.");
}
*/

// ===========================================================
// II. Loops
// ===========================================================

/*
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i=0; i<=10; i++){
  console.log(i)
}
// Write a loop that will print out all the numbers from 10 up to and including 400
for(let i=10; i<=400; i++){
  console.log(i)
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i=12; i<=400; i+=3){
  console.log(i)
}
*/

/*
// B. Get even students should use modulus
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for(let i = 1; i <= 100; i++){
  if(i %2 === 0){
    console.log(i + " <-- is an even number")
  } else{
    console.log(i)
  }
}
*/


/*
// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
for(let i = 0; i <= 100; i++){
  if(i % 5 === 0 && i % 3 ===0){
    console.log(`I found a ${i}. High five! I found a ${i}. Three is a crowd`)
  }else if(i % 5 === 0){
    console.log(`I found a ${i}. High five!`)
  } else if(i % 3 ===0){
    console.log(`I found a ${i}. Three is a crowd`)
  } else {
    console.log(i)
  }
}
*/


/*
// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let bank_account = 0
for(let i = 1; i <= 10; i++){
  bank_account += i
}
console.log(bank_account)
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
for(let i = 1; i <= 100; i++){
  bank_account += i * 2
}
console.log(bank_account)
// Check your work! Your bank_account should have $10,100 in it.
*/


// ===========================================================
// III. Arrays & Control flow
// ===========================================================

// A. Talk about it:

// What are the things in an array called? elements
// Do Arrays guarantee those things will be in order? yes
// What real-life thing could you model with an array? no wrong answers as long as its a list/collection


// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["veni", "vidi", "vici"]

// C. Accessing elements 

/*
// Given the following array 
const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
console.log(randomThings[0])
// Change the value of "Hello"to "World"
randomThings[2] = "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)
*/

/*
// D. Change values simple they should follow instructions
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
ourClass[2]
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")
console.log(ourClass)
*/

/*
// E. Mix It Up simple they should follow instructions
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: 
const myArray = [5, 10, 500, 20]

// Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Bob Marley", "my string")
// Remove the 5 from the beginning of the array.
myArray.shift()
// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley")
// Remove the string of your choice from the end of the array.
myArray.pop()
// Reverse this array using Array.prototype.reverse(). 
myArray.reverse()
// Did you mutate the array?-> yes 
// What does mutate mean? -> changing a variable or array permamnatly.
// Did the .reverse() method return anything? -> no because I didn't console logged it.
console.log(myArray)
*/


/*
// F. Biggie Smalls simple they should follow instructions
// Create a variable that contains an integer.
let myVariable = 100;
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.
if(myVariable < 100){
  console.log("little number")
} else{
  console.log(myVariable)
}
*/

/*
// G. Monkey in the Middle 
// Write an if ... else if ... else statement:

// console.log()little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
let number = 100
if(number < 100){
    console.log("little number")
} else{
    console.log("big number")
}
*/

/*
// H. What's in Your Closet?
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

kristynsCloset.splice(6,0,"raybans")
console.log(kristynsCloset)

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat"
console.log(kristynsCloset)

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0])

// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][1])

// Access one item from Thom's accessories array.
console.log(thomsCloset[2][2])

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][2]}!`)

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset)
*/


// ===========================================================
// IV. Functions
// ===========================================================

/*
// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
// => "Captain Reynolds is cool";

const printCool = (name) =>{
  return `${name} is cool`
}
console.log(printCool("Captain Reynolds"));


// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

// => 125

const calculateCube = (num) =>{
  return num * num * num
}
console.log(calculateCube(5));
*/

/*
// D. isVowel
const isVowel = (chr) =>{
  const vowel = ['a', 'e', 'i', 'o', 'u']
  return vowel.includes(chr.toLowerCase())
}
console.log(isVowel("o"));
*/

/*
// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// => [4, 13]

const getTwoLengths = (str1, str2) => [str1.length, str2.length]
console.log(getTwoLengths("Hank", "Hippopopalous"));
*/

/*
// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
const getMultipleLengths = (arr) =>{
  const result = [];
  for(const r of arr){
      result.push(r.length)
  }
  return result
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
*/

/*
// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.


const maxOfThree = (num1, num2, num3) => {
  const arr = [num1, num2, num3]

  arr.sort((a,b) => {
    return b - a
  })

  return arr[0]
}
console.log(maxOfThree(600, 9, 100));

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().
*/

/*
// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.


// const printLongestWord = (arr) => {
//   let ans = arr[0]
//   let length = arr[0].length
//   arr.forEach((str) => {
//     prevLength = length
//     length = Math.max(ans.length, str.length)
//     if(prevLength !== length){
//       ans = str
//     }    
//   })
//   return ans
// }
const printLongestWord = (arr) => {
  let result = "";
  for(let i = 0; i < arr.length; i++){
      if(result.length < arr[i].length){
          result = arr[i]
      }
  }
  return result;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Tooooooooooooodd"]));
*/

/*
// Objects
// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
user = {
  name : "Johnny",
  email : "johnnyBoy28@ymail.com",
  age : 16,
  purchased : []
};

// B. Update the user
// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = "newemail@newmail.com";

// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
user.age++;

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original userobject, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = "New Town";

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates")
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind")
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("Merino jodhpurs")
// Console.log just the "Merino jodhpurs" from the purchasedarray.
// console.log(user.purchased[2])

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friend with a name and age, we could write:

user.friend = {
    name: "Grace Hopper",
    age: 85
}
// When we console.log user, we would see the friend object added to our user object.

// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
user.friend.location = "Brazil";
user.friend.purchased = [];

// Console.log just the friend's name

// console.log(user.friend.name)

// Console.log just the friend's location

// console.log(user.friend.location)

// CHANGE the friend's age to 55

user.friend.age = 55

// The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.

user.friend.purchased.push("The One Ring")

// The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchased array.

user.friend.purchased.push("A latte")

// Console.log just "A latte" from the friend's purchasedarray.

// console.log(user.friend.purchased[1]);
*/


/*
// F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.

for(const item of user.purchased){
    console.log(item)
}

// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for(const item of user.friend.purchased){
    console.log(item)
}
*/


/*
// G. Functions can operate on objects
// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.

const updateUser = () => {
    user.age++;
    user.name = user.name.toUpperCase();
}
updateUser()

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

const oldAndLoud = (person) => {
    user.age += person;
}
oldAndLoud(3)
*/

// Cat Combinator

// 1. Mama cat
// Define an object called cat1 that contains the following properties:
// name
// breed
// age (a number)
const cat1 = {
  name: "Kit",
  breed: "unknown",
  age: 2
} 

// console.log the cat's age
// console.log(cat1.age)
// console.log the cat's breed
// console.log(cat1.breed)

// 2. Papa cat
// Define an object called cat2 that also contains the properties:
// name
// breed
// age (a number)
const cat2 = {
  name: "Kat",
  breed: "premium",
  age: 3
}

// 3. Combine Cats!
// The cats are multiplying!

// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.

// Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.
/*
const combineCats = (mama, papa) => {
  console.log(mama, papa)
}
combineCats(cat1, cat2)
*/

const combineCats = (mama, papa) => {
  let newCat = {
  name : mama.name + papa.name,
  age : 1,
  breed : mama.breed +"-"+ papa.breed
}
return console.log(newCat)   
}
// console.log(combineCats(cat1, cat2));
console.log(combineCats(combineCats(cat1, cat2)), (combineCats(cat1, cat2)));
