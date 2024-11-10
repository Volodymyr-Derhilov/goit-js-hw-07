"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const value = event.currentTarget.value;
  output.textContent = value ? value : "Anonymous";
});
