const slider = document.getElementById('slider');
const sliderVal = document.getElementById('sliderVal');

slider.addEventListener("input", event => {
  const sliderValue = slider.value;
  const roundedValue = Math.round(sliderValue / 5) * 5
  sliderVal.textContent = sliderValue;
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
