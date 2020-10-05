'use strict';

(function () {
  const NAMES = [
    `Иван`,
    `Хуан Себастьян`,
    `Мария`,
    `Кристоф`,
    `Виктор`,
    `Юлия`,
    `Люпита`,
    `Вашингтон`
  ];

  const LAST_NAMES = [
    `да Марья`,
    `Верон`,
    `Мирабелла`,
    `Вальц`,
    `Онопко`,
    `Топольницкая`,
    `Нионго`,
    `Ирвинг`
  ];

  const COAT_COLORS = [
    `rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`
  ];

  const EYES_COLORS = [
    `black`,
    `red`,
    `blue`,
    `yellow`,
    `green`
  ];

  const FIREBALL_COLORS = [
    `#ee4830`,
    `#30a8ee`,
    `#5ce6c0`,
    `#e848d5`,
    `#e6e848`
  ];

  const WIZARD_COUNT = 4;

  const generateWizards = (wizardsCount) => new Array(wizardsCount).fill(``).map(() => ({
    'name': `${window.utils.getRandomElement(NAMES)} ${window.utils.getRandomElement(LAST_NAMES)}`,
    'coatColor': `${window.utils.getRandomElement(COAT_COLORS)}`,
    'eyesColor': `${window.utils.getRandomElement(EYES_COLORS)}`,
  }));

  window.data = {
    FIREBALL_COLORS,
    EYES_COLORS,
    COAT_COLORS,
    WIZARD_COUNT,
    generateWizards
  };

})();
