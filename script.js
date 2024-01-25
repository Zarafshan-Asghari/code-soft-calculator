"use strict";
let output = document.getElementById("outputs");
const equalBtn = document.querySelector(".equal");
const deletBtn = document.querySelector(".DEL");
const clearBtn = document.querySelector(".AC");
const numbers = document.querySelectorAll(".number");

// concatenating number before operator
numbers.forEach((values) => {
  values.addEventListener("click", () => {
    output.value += values.value;
  });
});

// clear all number
clearBtn.addEventListener("click", () => {
  output.value = "";
});
// clear one by one
deletBtn.addEventListener("click", () => {
  output.value = output.value.slice(0, -1);
});

// result and operation
equalBtn.addEventListener("click", () => {
  function calculate() {
    try {
      output.value = eval(output.value);
    } catch (err) {
      output.value = "";
    }
  }
  calculate();
});
