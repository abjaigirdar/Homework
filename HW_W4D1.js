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
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

const newPerson = new Person("Timmy");
newPerson.ageUp(5);
newPerson.eat(5);
newPerson.exercise(5);
newPerson.ageUp(9);

const newHamster = new Hamster("Gus", "Timmy");

newPerson.buyHamster(newHamster);
newPerson.ageUp(15);
newPerson.eat(2);
newPerson.exercise(2);



