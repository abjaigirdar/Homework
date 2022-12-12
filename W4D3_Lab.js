// ////////////////////////////////
// // Easy Going
// ////////////////////////////////

// for(let i = 1; i <=20; i++){
//     console.log(i)
// }

// ////////////////////////////////
// // Get Even
// ////////////////////////////////

// for(let i = 0; i <= 200; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// ////////////////////////////////
// // Fizz Buzz
// ////////////////////////////////

// for(let i = 0; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }else if(i % 3 === 0){
//         console.log("Fizz")
//     } else if (i % 5 === 0){
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

// ////////////////////////////////
// // Wild Wild Life
// ////////////////////////////////

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// // name - 0, species - 1, age - 2, hometown -3

// // Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2] += 1

// // Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City"

// // Give D'Art a second hometown by adding "Hawkins"
// dart.push("Hawkins")

// // Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// wolfy.splice(0, 1, "Gameboy")

// ////////////////////////////////
// // Yell at the Ninja Turtles
// ////////////////////////////////

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// for (let ninja of ninjaTurtles) {
//     console.log(ninja.toUpperCase())
// }

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log: the index of Titanic
// console.log(favMovies.indexOf("Titanic"))

// use the .sort method Thought question: what did this do to the array? Did it permanently alter it? -> yes.
// console.log(favMovies.sort())

// Use the method pop
favMovies.pop()
// console.log(favMovies)

// push"Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)

// Reverse the array
favMovies.reverse()
// console.log(favMovies)

// Use the shift method
favMovies.shift()
// console.log(favMovies)

// unshift- what does it return? -> adds an element at the front of an array

// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// console.log(favMovies.indexOf("Django Unchained"))
favMovies.splice(14,1, "Avatar")
// console.log(favMovies)

// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it)
// console.log(favMovies.slice(favMovies.length / 2))

// - Thought question: did this permanently alter our array? -> No.

// store the value of your slice in a variable, console.log it 
let slicedFavMovies = favMovies.slice(favMovies.length / 2)
// console.log(slicedFavMovies)

// - Thought question: what is going on here? -> Created a new array.
// console.log your final results
// console.log(favMovies)

// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array? -> -1
// console.log(favMovies.indexOf("Fast and Furious"))

// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
// -> When you're adding to an array or object you're not re-assigning or re-declaring the constant, it's already declared and assigned, you're just adding to the "list" that the constant points to.


////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

// Remove Eggbert (hint look at the slice/splice method(s))
/*
console.log(whereIsWaldo.indexOf("Eggbert"))
whereIsWaldo.splice(1,1)
console.log(whereIsWaldo)
*/

// Change "Neff" to "No One"
// console.log(whereIsWaldo[2][2])
whereIsWaldo[2][2] = "No One"

// Access and console.log "Waldo"
// console.log(whereIsWaldo[3][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////

// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
/*
for(let i = 0; i <=20; i++){
    console.log("Love me, pet me! HSSSSSS!")
}
*/
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// Hint 1
// Hint 2
// Hint 3
// Rather than hard-coding the array position number set a variable
// Hint 4
// Hint 5
// Math.random() will return a number between 0 and 1. Array positions are integers. You will need to multiply the Math.random() number so that the range is between 0 and the length of the array
// Hint 6
/*
let evenMessage = [ "...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
for(let i = 0; i <= 20; i++){
    if(i % 2 === 0){
        console.log(evenMessage[Math.floor(Math.random() * evenMessage.length)])
    } else{
        console.log("Love me, pet me! HSSSSSS!")
    }
}
*/

////////////////////////////////
//  Find the Median
////////////////////////////////

// Find the median number in the following nums array, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
console.log(nums[Math.floor(nums.length / 2)])

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Hungry for More?

////////////////////////////////
//  Fibonnacci (morning lab)
////////////////////////////////

////////////////////////////////
//  Checkerboard (morning lab)
////////////////////////////////

////////////////////////////////
//  TwoDArray (afternoon lab)
////////////////////////////////

