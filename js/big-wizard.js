'use strict';

(function () {

  const setupWizard = document.querySelector(`.setup-wizard`);
  const coatColorInput = document.querySelector(`[name="coat-color"]`);
  const eyesColorInput = document.querySelector(`[name="eyes-color"]`);
  const setupFireBall = document.querySelector(`.setup-fireball-wrap`);
  const fireBallColorInput = document.querySelector(`[name="fireball-color"]`);

  const changeColor = (evt, colorArray, inputElement, isBg = false) => {
    const randomColor = window.utils.getRandomElement(colorArray);

    if (!isBg) {
      evt.target.style.fill = randomColor;
      inputElement.value = randomColor;
    } else {
      evt.target.parentElement.style.backgroundColor = randomColor;
      inputElement.value = randomColor;
    }
  };

  const onChangeWizardColor = (evt) => {

    if (evt.target.matches(`.wizard-eyes`)) {
      changeColor(evt, window.data.EYES_COLORS, eyesColorInput);

    } else if (evt.target.matches(`.wizard-coat`)) {
      changeColor(evt, window.data.COAT_COLORS, coatColorInput);
    }

  };

  const onChangeFireballColor = (evt) => {
    if (evt.target.parentElement.matches(`.setup-fireball-wrap`)) {
      changeColor(evt, window.data.FIREBALL_COLORS, fireBallColorInput, true);
    }
  };

  setupWizard.addEventListener(`click`, onChangeWizardColor);
  setupFireBall.addEventListener(`click`, onChangeFireballColor);
})();
