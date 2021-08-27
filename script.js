// javascript

const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const clear = document.getElementById("clear");
let instructionText = document.getElementById("instruction-text");

instructionText.textContent = `STOP!`;

function changeRedToYellow() {
  redLight.classList.remove("red");
  yellowLight.classList.add("yellow");
  instructionText.textContent = `READY!!`;
}

function changeYellowToGreen() {
  yellowLight.classList.remove("yellow");
  greenLight.classList.add("green");
  instructionText.textContent = `GO!!!`;
}

function changeGreenToRed() {
  greenLight.classList.remove("green");
  redLight.classList.add("red");
  instructionText.textContent = `STOP!`;
}

function runCode() {
  setTimeout(changeRedToYellow, 3000);
  setTimeout(changeYellowToGreen, 6000);
  setTimeout(changeGreenToRed, 9000);
}

let running = setInterval(runCode, 8000);

clear.addEventListener("click", function () {
  clearInterval(running);
});
