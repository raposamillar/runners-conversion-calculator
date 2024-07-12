let imperialUnits = document.getElementById("imperial-distance")
let metricUnits = document.getElementById("metric-distance")

function updateMiles() {
  let currentMiles = parseFloat(imperialUnits.textContent)
  metricUnits.textContent = (currentMiles / 0.621371).toFixed(2)
}

function updateKilometers() {
  let currentKilometers = parseFloat(metricUnits.textContent)
  imperialUnits.textContent = (currentKilometers * 0.621371).toFixed(2)
}

function addMiles(miles) {
  let currentMiles = parseInt(imperialUnits.textContent)
  imperialUnits.textContent = currentMiles + miles

  updateMiles()
}

function subtractMiles(miles) {
  let currentMiles = parseInt(imperialUnits.textContent)
  imperialUnits.textContent = currentMiles + miles

  updateMiles()
}

function addKilometers(kilometers) {
  let currentKilometers = parseInt(metricUnits.textContent)
  metricUnits.textContent = currentKilometers + kilometers

  updateKilometers()
}

function subtractKilometers(kilometers) {
  let currentKilometers = parseInt(metricUnits.textContent)
  metricUnits.textContent = currentKilometers + kilometers

  updateKilometers()
}