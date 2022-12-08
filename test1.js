class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef extends Dinner{
  constructor(appetizer, entree, dessert) {
    super(appetizer, entree, dessert)
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
console.log(deliciousDinner.findDinner());
