// <-- USS Assembly -->

class USS_Assembly {
  constructor() {
    this.hull = 20;
    this.firePower = 5;
    this.accuracy = 0.7;
  }

  attack() {
    let r = Math.random();
    if (r < this.accuracy) {
      invader.hull -= this.firePower;
      alert(`The Attack was SUCCESSFUL! 👍 \n Get Ready To Defend Now! ⚔️`);
    } else {
      alert(`You Missed The Target Boy! 🤦\n Get Ready To Defend Now! ⚔️`);
    }
  }
}

const defender = new USS_Assembly();

// <-- Alien Ship -->

class Alien_Ship {
  constructor() {
    this.hull = Math.floor(Math.random() * (6 - 3) + 3);
    this.firePower = Math.floor(Math.random() * (4 - 2) + 2);
    this.accuracy = Math.floor(Math.random() * (0.8 - 0.6) + 0.6);
  }

  attack() {
    let r = Math.random();
    if (r < this.accuracy) {
      defender.hull -= this.firePower;
      alert(`ALERT: You've Been HIT! 🪓`);
    } else {
      alert(`You Dodged a Bullet 🛡️`);
    }
  }
}

const invader = new Alien_Ship();

// The Game
const start = () => {
  alert(`The Universe is under attack. It NEEDS you!`);
  const firstAnswer = prompt(
    `Are you ready to Save The Universe? \n Press 'Y' to play or 'N' to exit.`
  );
  if (firstAnswer.toLowerCase() === "n") {
    alert(`Let the Universe Burn. Goodbye! 😞`);
  } else if (firstAnswer.toLowerCase() === "y") {
    alert(
      `Earth has been attacked by a bunch of Aliens! \nYou are the El Capitan of the USS Assembly. \nYour mission is to destroy all the enemy Alien Ships. \nATTACK! 🔫`
    );
    begin();
  } else {
    alert(`Invalid response \n Try Again!`);
  }
};

// Health
const health = () => {
  alert(`Your Current Health --> HULL: ${defender.hull} 
    || --> FIREPOWER: ${defender.firePower} || --> ACCURACY: ${
    defender.accuracy * 100
  }%\nAlien Ship #${invaderCount} Health --> HULL: ${
    invader.hull
  } || --> FIREPOWER: ${invader.firePower} || --> ACCURACY: ${Math.floor(
    invader.accuracy * 100
  )}%`);
};

// Battle
invaderCount = 6;

const begin = () => {
  health();
  while (invaderCount > 0) {
    if (invader.hull < 1) {
      invaderCount--;
    }
    if (invaderCount > 0 && defender.hull > 0) {
      invader.hull = Math.floor(Math.random() * (7 - 3) + 3);
      invader.firePower = Math.floor(Math.random() * (5 - 2) + 2);
      invader.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
    } else if (invaderCount < 1 && defender.hull < 1) {
      return alert(`Game Tied! 🤝`);
    } else if (invaderCount < 1 && defender.hull > 0) {
      return alert(`YES! You destroyed all the Alien Ships! 💯`);
    } else {
      return alert(`You lose! Try Again :skull_and_crossbones:`);
    }

    const firstAnswer = prompt(`Enter 'A' to Attack or 'Q' to Retreat`);
    if (firstAnswer.toLowerCase() === "q") {
      alert(`You Lose! ☠️`);
      defender.hull = 0;
      defender.firePower = 0;
      defender.accuracy = 0;
      health();
    } else if (firstAnswer.toLowerCase() === "a") {
      fight();
    } else {
      alert(`Invalid Response. \n Try Again.`);
    }
  }
};

// Fight
const fight = () => {
  defender.attack();
  invader.attack();
  begin();
};

// Initialize
start();
