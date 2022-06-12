// const { response } = require("express");

console.log("hello");

fetch("https://puzzle.mead.io/puzzle").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});

fetch("/weather?search=%22Philadelphia%22").then(
  (response) => {
    response.json().then((data) => {
      console.log(data);
    });
  }
);

const weatherForm = document.querySelector("form");
// console.log(weatherForm);
const input = document.querySelector("input");
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});
