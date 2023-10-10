/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("button");
const toggle = document.querySelector("#toggle>input");

const numberInput = document.querySelector("#numberInput");
const lenght = document.querySelector(".lenght-conversion");
const volume = document.querySelector(".volume-conversion");
const mass = document.querySelector(".mass-conversion");

toggle.addEventListener("click", () => {
  document.body.classList.toggle(
    "dark",
    !document.body.classList.contains("dark")
  );
});

convertBtn.addEventListener("click", () => {
  if (numberInput.value === "") {
    alert("Please, type a value");
  } else {
    convert();
  }
});

function convert() {
  const meterToFeet = Number(numberInput.value) * 3.281;
  const feetToMeter = Number(numberInput.value) / 3.281;
  const literToGallon = Number(numberInput.value) * 0.264;
  const gallonToLiter = Number(numberInput.value) / 0.264;
  const kiloToPound = Number(numberInput.value) * 2.204;
  const poundToKilo = Number(numberInput.value) / 2.204;

  lenght.innerHTML = `
  ${numberInput.value} meters = ${meterToFeet.toFixed(3)} feet | ${
    numberInput.value
  } feet = ${feetToMeter.toFixed(3)} meters
  `;
  volume.innerHTML = `
  ${numberInput.value} liters = ${literToGallon.toFixed(3)} gallon | ${
    numberInput.value
  } gallon = ${gallonToLiter.toFixed(3)} liters
  `;
  mass.innerHTML = `
  ${numberInput.value} kilos = ${kiloToPound.toFixed(3)} pound | ${
    numberInput.value
  } pound = ${poundToKilo.toFixed(3)} kilos
  `;
}
