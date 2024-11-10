"use strict";

const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);

const userData = {
  email: "",
  password: "",
};

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = event.target.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  userData.email = [email];
  userData.password = [password];

  console.log(userData);

  form.reset();
}
