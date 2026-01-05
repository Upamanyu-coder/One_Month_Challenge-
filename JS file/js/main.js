console.warn("This is a warning message");
console.error("This is an error message");
console.info("This is an info message");
console.log("This is a log message");

// var, let, const

const age = 25; //Reading Int
const name = "Yubraj Dhakal"; // Reading String
const isMale = true; // Reading Boolean

let address = "Bardaghat-09, Nawalparasi";
address = "Bhairahawa";

var city = "Bhairahawa";
var city = "Bardaghat";

console.log(age);
console.log(name);
console.log(isMale);
console.log(address);
console.log(city);

// Operators
// 1. Arithmetic operators: +, -, *, /, %, ++, --
console.log(8 + 5);
console.log(8 - 5);
console.log(8 * 5);
console.log(8 / 5);
console.log(8 % 5);

// 2. Logical Operators: AND (&&), OR (||), NOT (!)
console.log(true && true);
console.log(true && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!false);

// 3. Relational Operators: >, <, >=, <=, !=, ==, ===, !==
console.log(5 == 5); // equality
console.log(5 == 4);
console.log(5 > 4);
console.log(5 < 4);
console.log(5 > 5); //false
console.log(5 >= 5); //true
console.log(5 != 4);

console.log(5 == "5"); // true
console.log(5 === "5"); // false

// 4. Ternary Operator: <condition> ? <true case> : <false case>
const percent = 20;

console.log(percent >= 40 ? "Pass" : "Fail");

// 4. Ternary Operator : <condition> ? <value_if_true> : <value_if_false>

const percentage = 40;

console.log(percentage >= 40 ? "Pass" : "Fail");

// Conditional Statements
if (percentage < 40) {
  console.log("Fail");
} else if (percentage < 60) {
  console.log("Second Devision");
} else if (percentage < 80) {
  console.log("First Devision");
} else if (percentage < 100) {
  console.log("Distriction Devision");
} else {
  console.log("Whole First");
}

//Functions

function greet(name) {
  console.log("Hello  " + name);
}

greet("Yubraj Dhakal Upamanyu");

function sum(a, b) {
  const result = a + b;
  return result;
}

const addedValue = sum(5, 6);
console.log(addedValue);

// Loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let i = 1;

while (i <= 10) {
  console.log(i);

  i++; //last
}

// Function
function greet(name) {
  console.log("Hello " + name);
}

greet("Ram"); // function call
greet("Hari");

function sum(a, b) {
  const result = a + b;

  return result;
}

const addedValues = sum(12, 85);
console.log(addedValues);
