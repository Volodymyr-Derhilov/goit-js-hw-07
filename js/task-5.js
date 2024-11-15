"use strict";

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", changeColor);

function changeColor(event) {
  event.preventDefault();

  const color = getRandomHexColor();
  body.style.backgroundColor = color;

  colorSpan.textContent = `${color}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
