'use strict';
const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);
const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

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
const WIZARDS_LIST = [];

const getRandomElement = function (arr) {
  return arr[Math.floor((Math.random() * arr.length))];
};

const generateWizards = function (wizardsCount) {
  for (let i = 0; i < wizardsCount; i++) {
    let el = {
      'name': `${getRandomElement(NAMES)} ${getRandomElement(LAST_NAMES)}`,
      'coatColor': `${getRandomElement(COAT_COLORS)}`,
      'eyesColor': `${getRandomElement(EYES_COLORS)}`,
    };
    WIZARDS_LIST.push(el);
  }
};

generateWizards(WIZARD_COUNT);

const renderWizard = function (wizardName, wizardCoat, wizardEyes) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizardName;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizardCoat;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizardEyes;

  return wizardElement;
};

const showWizards = function (wizardsList) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < wizardsList.length; i++) {
    const wizard = wizardsList[i];
    fragment.appendChild(renderWizard(
      wizard.name,
      wizard.coatColor,
      wizard.eyesColor
      ));
  }
  similarListElement.appendChild(fragment);
};

showWizards(WIZARDS_LIST);
