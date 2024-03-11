// * Define textField Object
const textField = document.getElementById('textField');

const windSpeedOutput = document.getElementById('windSpeedOutput');
const windDirectionOutput = document.getElementById('windDirectionOutput');

const externalTemperatureOutput = document.getElementById('externalTemperatureOutput');
const pressureOutputHG = document.getElementById('pressureOutputHG');
const pressureOutputBar = document.getElementById('pressureOutputBar');
const humidityOutput = document.getElementById('humidityOutput');
const dewPointOutput = document.getElementById('dewPointOutput');

const internalTemperatureOutput = document.getElementById('internalTemperatureOutput');

// Function to generate random integer with one decimal point precision
function getRandomInt() {
  return Math.floor(Math.random() * 900 + 1000) / 10; // Generates random number between 100 and 999 with one decimal point precision
}

// Set random values for each output
function randomize() {
  windSpeedOutput.innerHTML = getRandomInt();
  windDirectionOutput.innerHTML = getRandomInt();
  
  externalTemperatureOutput.innerHTML = getRandomInt();
  pressureOutputHG.innerHTML = getRandomInt();
  pressureOutputBar.innerHTML = getRandomInt();
  humidityOutput.innerHTML = getRandomInt();
  dewPointOutput.innerHTML = getRandomInt();
  
  internalTemperatureOutput.innerHTML = getRandomInt();
}


// * Run update every {secondArgument ms}
setInterval(randomize, 1000);

