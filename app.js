
/*
let name = "Jimmy";

var isHungry = true;

const num = 70;

if (num >0) {
    console.log("positive")
    if (num >100) {
        console.log("Greater than 100")
    } else {
        console.log("less than 100")
    }
} else {
    console.log("negetive")
}
*/


/*
// conditional //

const studentGrade = 90;

if (studentGrade >= 90) {
    console.log("A")
} else if(studentGrade >= 80){
    console.log("B")
} else if(studentGrade >= 70){
    console.log("C")
} else if(studentGrade >= 55){
    console.log("D")
} else {
    console.log("F")
}
*/


/*
// Loop // 
for (let i = 10; i > 0; i--) {
    console.log(i)
}
*/

/* 
for (let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        console.log(i, "Even");
    } else {
        console.log(i, "Odd");
    }
}


const hashs = ["#", "##", "###", "####", "#####",];
for (let i = 0; i < hashs.length; i++) {
    console.log(hashs[i])
}

const names = ["john", "cena", "tim", "sally"];

const name1 = names[3];
console.log(name1)


const movies = ["Drak knight", "Batman", "superman", "spiderman"];
// let firstMovie = movies[0];
//console.log(movies);
//movies.push("Harry Potter", "indiana Jones")
//console.log(movies);

// movies.unshift("Mummys", "Scarface")
// movies.unshift("GodFather")
// //console.log(movies);

// movies.pop();
// console.log(movies);
// movies.shift();
// console.log(movies);

// movies.forEach(function (m, idx){
//     console.log(idx, m)
// });

for(let movie of movies) {
    if(movie === 'superman') {
        break;
    }
    console.log(movie)
}

let newMovies = movies.slice(0, -2);
console.log(newMovies)


const nums = [1,2,3,4]
const names = ["john", "cena", ...nums, "tim", "kelly"]

let newArray = [...nums, ...names];
//console.log(newArray)
//console.log(names)

let namesJoin = names.join("----")
let reverseNames = names.reverse();
console.log(namesJoin)
console.log(reverseNames)

*/

const nums = [1,2,3,4, 5, 5, 0 , 0 ,2]
console.log(nums.indexOf(0))
console.log(nums.sort())
