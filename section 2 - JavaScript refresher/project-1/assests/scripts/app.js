//import { apiKey } from "./util.js";

import apiKey from './util.js';
console.log(apiKey);

function greeting(name, message) {
  console.log(name);
  console.log(message);
}
greeting("Amr", "Hru");

function creatGreeting(name, message = "Hru!") {
  return "Hi, I am " + name + ". " + message;
}

const greeting1 = creatGreeting("Amr");
console.log(greeting1);

const greeting2 = creatGreeting("Frank");
console.log(greeting2);

const user = {
  name: "Amr",
  age: 21,
  hello() {
    console.log("Hello!");
    console.log(this.name);
  }
};

console.log(user.name);
console.log(user.age);

user.hello();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi!");
  }
}

const user1 = new User("Frank", 21);
console.log(user1);

const hobbies = ["Gym", "Riding", "Late night Walk"];
console.log(hobbies[0]);

hobbies.push("Working");
const index = hobbies.findIndex((item) => item === "Riding");
console.log(index);

const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);

const objectMapped = hobbies.map((item) => ({ text: item }));
console.log(objectMapped);

/* function transformObject(numberArray) {
  numberArray = [1, 2, 3];
  const objArray = numberArray.map((item) => ({ val: item }));
  return objArray;
}

console.log(transformObject()); */

const numarr = [1, 2, 3];
const objarr = numarr.map((item) => ({ val: item }));
console.log(objarr);

/* function transformToObjects(numberarray){
  return numberarray.map(number => {
    return {val: number}
  });
}
transformToObjects(); */

// destructuring array
const [firstName, lastName] = ["Amr", "Muhammad"];
console.log(firstName);
console.log(lastName);

// destructuring object
const { name: userName, age: userage } = {
  name: "Amr",
  age: 21
};
console.log(userName);
console.log(userage);

//Spread Operator on an array
const fav = ["Gym", "Races"];
const newFav = ["football"];
const mergeFavs = [...fav, ...newFav];
console.log(mergeFavs);

//Spread Operator on objects
const userInfo = {
  name: "Frank",
  id: 9017
};

const extendedUser = {
  isASenior: true,
  ...userInfo
};

console.log(extendedUser);

/* const password = prompt("Your Password");

if (password === "Amr") {
  console.log("Hello Amr");
} else if (password === "Frank") {
  console.log("Hello Frank");
} else {
  console.log("Access denied");
} */

const me = ["Amr", 21];
for (const iam of me) {
  console.log(iam);
}

//Functions as values to other function
function handleTimeout() {
  console.log("Timed out!");
}

const handleTimeoutAgain = () => {
  console.log("Timed out ... Again!");
};

setTimeout(() => {
  console.log("More timing out.....");
}, 4000);
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeoutAgain, 3000);

function greeter(greeterFn) {
  greeterFn();
}

greeter(() => console.log("hi"));

//Defining function inside function
function init() {
  function hi() {
    console.log("Hello");
  }
  hi();
}
init();
