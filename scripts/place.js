document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// place.js - Wind Chill Calculation for Weather Section
document.addEventListener('DOMContentLoaded', function () {
  // Static values matching the weather section
  const temperature = 10; // °C
  const windSpeed = 5;    // km/h

  // Wind chill formula for Celsius (°C, km/h)
  function calculateWindChill(tempC, speedKmh) {
    return (
      13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16)
    ).toFixed(1);
  }

  // Only calculate if temp <= 10°C and wind > 4.8 km/h
  let windChillDisplay = 'N/A';
  if (temperature <= 10 && windSpeed > 4.8) {
    windChillDisplay = calculateWindChill(temperature, windSpeed) + ' °C';
  }

  // Find the wind chill element and update it
  const windChillEls = document.querySelectorAll('.weather-list li');
  windChillEls.forEach(li => {
    if (li.textContent.trim().toLowerCase().startsWith('wind chill')) {
      li.innerHTML = '<strong>Wind Chill:</strong> ' + windChillDisplay;
    }
  });
});
