'use strict';
const labelTemperature = document.querySelector('.checkbox-temperature');
const checkboxTemperature = labelTemperature.querySelector('input');
const formTemperaute = document.querySelector('.page-form__temperature');
const selectList = document.querySelectorAll('select');


checkboxTemperature.addEventListener('click', function() {
  if (checkboxTemperature.checked) {
    formTemperaute.style.display = 'flex';
  } else {
    formTemperaute.style.display = 'none';
  }
});
