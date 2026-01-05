/*
 * Template Literals
 * Destructing (Array, Objects)
 * Spread Operator
 * Arrow Function
 * Array methods: map, filter, sort, find, includes
 */

// Template Literals
const name = "Yubraj Dhakal";
const address = "Bardaghat, Nawalparasi";
const age = 25;

const result = `Hello my name is ${name}.
I live in ${address}.
I am ${age} years old.`;

console.log(result);

// Objects Destructing

const user = {
  email: "contact@yubrazdhakal.com.np",
  password: "Contact@MAC1",
  role: "Admin",
};

// console.log(user.email);
// console.log(user.password);
// console.log(user.role);

// Destructuring

// Array Destructuring

// const team = [Yubraj, Sujan, Amrit, Aarati, Kritika, Jyoti];

// const [CEO, CTO, CMO, PMO, COO, FMO] = team;

//Rest Operators
function addCartPrice(...num1) {
  return num1;
}

console.log(addCartPrice(100, 200, 300, 500));

// Arrow Functions
