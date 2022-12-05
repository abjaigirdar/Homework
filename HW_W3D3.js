class Governor {
  constructor(politicalParty, termsServed) {
    this.politicalParty = politicalParty;
    this.termsServed = termsServed;
  }
  static yearsInPolitics(years) {
    console.log(`Years in politics is : ${years}`);
  }
}
Governor.yearsInPolitics(30);

class Person {
  constructor(age, gender, name) {
    this.age = age;
    this.gender = gender;
    this.name = name;
  }
  isAboveEighteen() {
    if (age >= 18) {
      console.log(`yes ${Person.name} is over 18.`);
    } else {
      console.log(`${Person.name} is under 18.`);
    }
  }
  isTall(tallOrNot) {
    console.log(`${Person.name} is `, tallOrNot);
  }
  likesPolitics(likesOrNot) {
    console.log(`${Person.name} ${likesOrNot} Politics`);
  }
}

class PostalWorkers extends Person {
  slogan() {
    console.log("I'm a postal worker");
  }
}
const newPostalWorker1 = new PostalWorkers(33, 'male', "Bob");
const newPostalWorker2 = new PostalWorkers(36, 'female', "Adriana");
console.log(newPostalWorker1)
console.log(newPostalWorker2)

class Chef extends Person {
  constructor(age, gender, name, yearsOfExperience) {
    super(age, gender, name);
    this.yearsOfExperience = yearsOfExperience;
  }
  greet() {
    console.log(`${this.name} welcomes you.`)
  }
}
const chef1 = new Chef(29, 'female', 'Mila', 3)
const chef2 = new Chef(43, 'male', 'Johnson', 7)
console.log(chef1)
console.log(chef2)






