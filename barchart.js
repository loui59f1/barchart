"use strict";

document.addEventListener("DOMContentLoaded", start);

// Creating the array model
let arrmodel = [];

function start() {
  console.log("Start function");

  for (let counter = 0; counter < 40; counter++) {
    arrmodel[counter] = fakeNumbers();
  }
  startLoop();
  viewData();
}

function startLoop() {
  for (let counter = 0; counter < 40; counter++) {
    document.getElementById("bar_box").getElementsByClassName("bar")[
      counter
    ].style.height = arrmodel[counter] + "px";
  }
}

function fakeNumbers() {
  console.log("Making random number");

  const randomNumber = Math.floor(Math.random() * 32);
  console.log(randomNumber);
  return randomNumber;
}

function viewData() {
  console.log("Viewing the 'Customer data'");

  modifyModel();
  startLoop();

  setTimeout(viewData, 500);
}

function modifyModel() {
  console.log("Modify array model");

  arrmodel.push(fakeNumbers());
  arrmodel.shift();
}
