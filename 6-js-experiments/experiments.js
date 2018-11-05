const monthlyRent = 500;
const MONTHS_IN_A_YEAR = 12;
const YEARS_IN_A_DECADE = 10;

const yearlyRent = monthlyRent * MONTHS_IN_A_YEAR;
const decadelyRent = yearlyRent * YEARS_IN_A_DECADE;
console.log(monthlyRent, yearlyRent, decadelyRent);

const firstName = "Andy";
const lastName = "Nicholl";
const otherName = "Patricia";

const sentence = "Hey there " + firstName + " " + lastName + "! This is the old way!" + " I have a cousin named " + firstName + " LOL!";
const sentenceWithTemplate = `What up ${firstName} ${lastName}! How are you!? What's the deal with your sister ${otherName} not paying her $${yearlyRent} rent anyway? It's only $${monthlyRent} per month.`;

console.log(sentence);
console.log(sentenceWithTemplate);

// If Experiment

const isTheSkyBlue = false;

if (isTheSkyBlue) {
  console.log(`${firstName} says the sky is blue`);
} else{
    console.log(`${firstName} says the sky is red`);
  }

// If Experiment

const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is ... not blue?");
}

// If Experiment

const isOceanBlue = false;
let greeting
if (isOceanBlue) {
  greeting = (`The Ocean is Blue`)
} else {
  greeting = (`The ocean just got wild`)
}
console.log(greeting)

// If Experiment

const myVariable = 10
if (2+2===4){
  console.log(`Hooray ${firstName}`)
} else {
  console.log(`Better pay your ${monthlyRent}`)
}

// If Experiment

const num = 5.5
console.log(num + 2 / 4)

if (2 + 2 === 4) {
  console.log(
    "Oh thank god, the fundamental principles of mathematics still hold true."
  );
} else {
  console.log("Uh, panic?");
}

// Else If Experiment

const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have a lot of nachos to myself.");
} else if (friendsAtYourParty >= 4 && friendsAtYourParty <= 9) {
  console.log("Perfect amount to play some Mario Kart.");
} else {
  console.log("Wooooo turn on the dance music!");
}

// Else If Experiment

const dogsAtYourParty = 6;

if (dogsAtYourParty === 0) {
  console.log(`COOL, I'm a sad boy`);
} else if (dogsAtYourParty >= 4 && dogsAtYourParty <= 6) {
  console.log(`Let's bark`);
  } else {
  console.log(`My friends just got high on fun`)
  }



// While Experiment

let friendsAtYourHouse = 0;

while (friendsAtYourHouse < 10) {
  console.log(friendsAtYourHouse);
  // These all do the same thing as the last one that's not commented out
  // friendsAtYourHouse = friendsAtYourHouse + 1;
  // friendsAtYourHouse++
  // ++friendsAtYourHouse
  friendsAtYourHouse += 1;
}
console.log(friendsAtYourHouse);

// For Experiment

let goodpups = 0;

for (let i = 0; i <= 10; i++){
  console.log(i)
  goodpups++
}

console.log(`holy hell`)
