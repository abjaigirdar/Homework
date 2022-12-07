class Hamster {
  constructor(name) {
    this.owner;
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
    this.hamster = [];
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
    console.log(`Hello ${this.name}!`);
  }
  eat(incrementNumber) {
    this.weight = this.weight + incrementNumber;
    this.mood = this.mood + incrementNumber;
  }
  exercise(decrementNumber) {
    this.weight = this.weight - decrementNumber;
  }
  ageUp(number) {
    this.age = this.age + number;
    this.height = this.height + number;
    this.weight = this.weight + number;
    this.mood = this.mood - number;
    this.bankAccount = this.bankAccount + 10;
  }
  buyHamster(hamster) {
    this.hamster.push(hamster);
    this.mood = this.mood + 10;
    this.bankAccount = this.bankAccount - getPrice();
  }
  
}
