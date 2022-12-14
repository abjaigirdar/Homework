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



// console.log(timmy)
// console.log(gus)