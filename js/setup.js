'use strict';
let userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

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

const getRandomElement = function (arr) {
  return arr[Math.floor((Math.random() * arr.length))];
};

const generateWizards = function () {
  const wizards = [];
  for (let i = 1; i <= 4; i++) {
    let el = {
      'name': `${getRandomElement(NAMES)} ${getRandomElement(LAST_NAMES)}`,
      'coatColor': `${getRandomElement(COAT_COLORS)}`,
      'eyesColor': `${getRandomElement(EYES_COLORS)}`,
    };

    wizards.push(el);
  }

  return wizards;
};

document.querySelector(`.setup-similar`).classList.remove(`hidden`);
const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const showWizards = function () {
  const fragment = document.createDocumentFragment();
  const wizards = generateWizards();
  for (let i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

showWizards();


