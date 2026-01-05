// DOM Stands for Document Object Model. t
// To dynamically access and manipulate the content,
// structure, and style of a web document

// console.log("Hello, Yubraj");

const title = document.querySelector("h3");

console.log(title);

title.innerText = "Hello, Yubraj";

const paragraph = document.querySelector("p");
paragraph.innerText = "We are very gladful to have you CEO of J.V. Studio";

const button = document.getElementById("btn");
// button.innerText = "Submit =>";

button.addEventListener("click", () => {
  console.log("hover");
  button.style.background = "Green";
  button.style.color = "White";
});

button.addEventListener("mouseenter", () => {
  console.log("hover");
  button.style.background = "Blue";
  button.style.color = "White";
});

button.addEventListener("mouseleave", () => {
  console.log("hover");
  button.style.background = "Red";
  button.style.color = "White";
});

button.style.borderRadius = "10px";
button.style.width = "200px";
