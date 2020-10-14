'use strict';

(function () {
  const wizardElement = document.querySelector(`.setup-wizard`);
  const wizardEyesElement = wizardElement.querySelector(`.wizard-eyes`);
  const wizardCoatElement = wizardElement.querySelector(`.wizard-coat`);
  const wizardFireBallElement = document.querySelector(`.setup-fireball-wrap`);

  let wizard = {
    onEyesChange(color) {
      return color;
    },
    onCoatChange(color) {
      return color;
    },
    onFireBallChange(color) {
      return color;
    }
  };

  wizardEyesElement.addEventListener(`click`, () => {
    const newColor = window.utils.getRandomElement(window.data.EYES_COLORS);
    wizardEyesElement.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  wizardCoatElement.addEventListener(`click`, () => {
    const newColor = window.utils.getRandomElement(window.data.COAT_COLORS);
    wizardCoatElement.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardFireBallElement.addEventListener(`click`, () => {
    const newColor = window.utils.getRandomElement(window.data.FIREBALL_COLORS);
    wizardFireBallElement.style.backgroundColor = newColor;
    wizard.onFireBallChange(newColor);
  });

  window.wizard = {
    setCoatChangeHandler(cb) {
      wizard.onCoatChange = cb;
    },

    setEyesChangeHandler(cb) {
      wizard.onEyesChange = cb;
    },

    setFireBallChangeHandler(cb) {
      wizard.onFireBallChange = cb;
    }
  };
})();
