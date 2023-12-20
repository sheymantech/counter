"use strict";

const btnIncrease = document.querySelector(".btn-increase");
const btnDecrease = document.querySelector(".btn-decrease");
const btnReset = document.querySelector(".btn-reset");
const counterView = document.querySelector(".counter");

let counter = 0;

function setColorAndView(counter) {
  counterView.textContent = counter;

  if (counter > 0) counterView.style.color = "green";
  if (counter < 0) counterView.style.color = "red";
  if (counter === 0) counterView.style.color = "black";
}

btnIncrease.addEventListener("click", function () {
  counter++;
  setColorAndView(counter);
});

btnReset.addEventListener("click", function () {
  counter = 0;
  setColorAndView(counter);
});

btnDecrease.addEventListener("click", function () {
  counter--;
  setColorAndView(counter);
});
