"use strict";

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const del = document.querySelector(".del");
const trigo = document.querySelectorAll(".trigo");
let string = "";

for (const num of numbers) {
  num.addEventListener("click", function () {
    string += num.value;
    display.value = string;
    console.log(string);
  });
}

for (const opr of operators) {
  opr.addEventListener("click", function () {
    string += opr.value;
    display.value = string;
    console.log(string);
  });
}

equals.addEventListener("click", function () {
  const invalidOperators = ["++", "--", "..", "**", "//", "%%"];

  for (const operator of invalidOperators) {
    if (string.includes(operator)) {
      display.value = "Math Error";
      return;
    }
  }

  let result = eval(string);
  display.value = result;
});

reset.addEventListener("click", function () {
  string = " ";
  display.value = string;
});

del.addEventListener("click", function () {
  string = string.slice(0, -1);
  display.value = string;
});
