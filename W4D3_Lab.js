////////////////////////////////
// Easy Going
////////////////////////////////

for(let i = 1; i <=20; i++){
    console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////

for(let i = 0; i <= 200; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }else if(i % 3 === 0){
        console.log("Fizz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// name - 0, species - 1, age - 2, hometown -3

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] += 1

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City"

// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins")

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice(0, 1, "Gameboy")

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////



////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////