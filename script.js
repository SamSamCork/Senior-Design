// Slider Code Below
const slider = document.getElementById('slider');
const sliderVal = document.getElementById('sliderVal');

slider.addEventListener("input", event => {
  const sliderValue = slider.value;
  sliderVal.textContent = sliderValue;
  slider.style.setProperty('--sliderOpac', sliderValue / 100 + 0.2)
});
slider.addEventListener("mouseup", event => {
  const sliderValue = slider.value;
  let roundedValue;

  if (sliderValue % 10 === 1 || sliderValue % 10 === 2 || sliderValue % 10 === 8 || sliderValue % 10 === 9) {
    // Round to the nearest multiple of 10 if last digit is 1 or 2
    roundedValue = Math.round(sliderValue / 10) * 10;
  } else {
    // Otherwise, leave value the same
    roundedValue = sliderValue;
  }
  sliderVal.textContent = roundedValue;
});

// Button Code Below
const button = document.getElementById('onoff');
let button_val = 0; // Initialize the button value to 0

button.addEventListener("mouseup", event => {
  // Send signal to the ESP32
  sendESP('on')


  if (button_val === 0) {
    button_val = 1;
  } else {
    button_val = 0;
  }
  httpRequest.open(\"GET\", \"/on_off_value?value=\" + button_val, true); httpRequest.send()
});


// Functions Below
function sendESP(command) {
  // Will need to edit with correct address & API info
  fetch(`http://esp32_ip_address/control?command=${command}`)
    .then(response => response.text())
    .then(data => {
      console.log('Received response from ESP32:', data);
    })
    .catch(error => {
      console.error('Error sending command:', error);
    });
}
