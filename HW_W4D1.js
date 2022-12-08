
class Hamster {
  constructor(name, owner = "") {
    this.owner = owner;
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
  constructor(
    name,
    age = 0,
    height = 0,
    weight = 0,
    mood = 0,
    hamsters = [],
    bankAccount = 0
  ) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamsters = hamsters;
    this.bankAccount = bankAccount;
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
    console.log(`Hello, this is ${this.name}!`);
  }
  eat(incrementNumber) {
    this.weight += incrementNumber;
    this.mood += incrementNumber;
  }
  exercise(decrementNumber) {
    this.weight -= decrementNumber;
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
      return `You bought the hamster`;
    } else {
      return `You don't have enough money`;
    }
  }
}

const newPerson = new Person("Timmy");
newPerson.ageUp(5);
newPerson.eat(5);
newPerson.exercise(5);
newPerson.ageUp(9);

const newHamster = new Hamster("Gus", "Timmy");

//console.log(newPerson.buyHamster(newHamster));
newPerson.ageUp(15);
newPerson.eat(2);
newPerson.exercise(2);


// Chef Make Dinners

class Dinner {
  constructor(appetizer, entree, dessert, dinnerNum) {
    this.appetizer = appetizer;    this.entree = entree;
    this.dessert = dessert;
    this.dinnerNum = dinnerNum;
  }
}

class Chef {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
    this.dinnerNumber = [];
  }
  makeDinner() {
    const newDinner = new Dinner(
      this.appetizer,
      this.entree,
      this.dessert,
      this.dinnerNumber.length
    );
    this.dinnerNumber.push(newDinner);
  }
  findDinner(index) {
    return this.dinnerNumber[index];
  }
}

const deliciousDinner = new Chef(
  "Samosa",
  "Biryani",
  "Halwa"
);
deliciousDinner.makeDinner();
deliciousDinner.makeDinner();
deliciousDinner.makeDinner();
console.log(deliciousDinner);
//console.log(deliciousDinner.findDinner());
