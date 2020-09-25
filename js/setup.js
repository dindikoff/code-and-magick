'use strict';

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

const WIZARD_COUNT = 4;

const userDialog = document.querySelector(`.setup`);
const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

userDialog.classList.remove(`hidden`);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const getRandom = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomElement = (arr) => {
  return arr[getRandom(0, arr.length - 1)];
};

const generateWizards = (wizardsCount) => {
  const wizardList = [];
  for (let i = 0; i < wizardsCount; i++) {
    wizardList.push({
      'name': `${getRandomElement(NAMES)} ${getRandomElement(LAST_NAMES)}`,
      'coatColor': `${getRandomElement(COAT_COLORS)}`,
      'eyesColor': `${getRandomElement(EYES_COLORS)}`,
    });
  }
  return wizardList;
};

const renderWizards = (wizards) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizards.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizards.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards.eyesColor;

  return wizardElement;
};

const showWizards = (wizardsList) => {
  const fragment = document.createDocumentFragment();

  for (let wizard of wizardsList) {
    fragment.appendChild(renderWizards(wizard));
  }
  return fragment;
};

const wizardsList = generateWizards(WIZARD_COUNT);
similarListElement.appendChild(showWizards(wizardsList));

