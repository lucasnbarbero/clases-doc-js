// Utilizando métodos tradicionales
const container = document.getElementById("container");
console.log(container);

const items = document.getElementsByClassName("item");
console.log(items);

const usernameInput = document.getElementsByName("username")[0];
console.log(usernameInput);

const primaryButton = document.getElementsByTagName("button")[0];
console.log(primaryButton);

// Utilizando métodos modernos
const welcomeHeader = document.querySelector("h1");
console.log(welcomeHeader);

const messageParagraph = document.querySelector(".message");
console.log(messageParagraph);

const firstItem = document.querySelector(".item");
console.log(firstItem);

const allItems = document.querySelectorAll(".item");
console.log(allItems);

const btnWithClass = document.querySelector(".btn.primary");
console.log(btnWithClass);
