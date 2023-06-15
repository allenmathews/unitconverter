const convertBtn = document.getElementById('convert-btn')
const inputEl = document.getElementById('input')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value;
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet`
    volumeEl.textContent = `${baseValue} liter = ${baseValue * literToGallon} gallon`
    massEl.textContent = `${baseValue} kilogram = ${baseValue * kiloToPound} pound`
})