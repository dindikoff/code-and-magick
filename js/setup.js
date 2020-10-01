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

const FIREBALL_COLORS = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`
];

const KEYS = {
  'ESCAPE': `Escape`,
  'ENTER': `Enter`
};

const WIZARD_COUNT = 4;
const setupWizard = document.querySelector(`.setup-wizard`);
const coatColorInput = document.querySelector(`[name="coat-color"]`);
const eyesColorInput = document.querySelector(`[name="eyes-color"]`);
const setupFireBall = document.querySelector(`.setup-fireball-wrap`);
const fireBallColorInput = document.querySelector(`[name="fireball-color"]`);

const userDialogOpen = document.querySelector(`.setup-open`);
const userDialog = document.querySelector(`.setup`);
const userDialogClose = userDialog.querySelector(`.setup-close`);
const userNameInput = userDialog.querySelector(`.setup-user-name`);
const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const getRandom = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomElement = (arr) => {
  return arr[getRandom(0, arr.length - 1)];
};

const generateWizards = (wizardsCount) => new Array(wizardsCount).fill(``).map(() => ({
  'name': `${getRandomElement(NAMES)} ${getRandomElement(LAST_NAMES)}`,
  'coatColor': `${getRandomElement(COAT_COLORS)}`,
  'eyesColor': `${getRandomElement(EYES_COLORS)}`,
}));

const wizardsList = generateWizards(WIZARD_COUNT);

const renderWizards = (wizards) => {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizards.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizards.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards.eyesColor;

  return wizardElement;
};

const showWizards = (wizardsArray) => {
  const fragment = document.createDocumentFragment();

  for (let wizard of wizardsArray) {
    fragment.appendChild(renderWizards(wizard));
  }
  return fragment;
};

similarListElement.appendChild(showWizards(wizardsList));

// Modal

const onModalEscPress = function (evt) {
  if (evt.key === KEYS.ESCAPE && evt.target !== userNameInput) {
    evt.preventDefault();
    closeModal();
  }
};

const openModal = function () {
  userDialog.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onModalEscPress);
};


const closeModal = function () {
  userDialog.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onModalEscPress);
};

userDialogOpen.addEventListener(`click`, openModal);

userDialogOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === KEYS.ENTER) {
    openModal();
  }
});

userDialogClose.addEventListener(`click`, function () {
  closeModal();
});

userDialogClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === KEYS.ENTER) {
    closeModal();
  }
});

// Wizard Color

const changeColor = (evt, colorArray, inputElement, isBg = false) => {
  const randomColor = getRandomElement(colorArray);

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
    changeColor(evt, EYES_COLORS, eyesColorInput);

  } else if (evt.target.matches(`.wizard-coat`)) {
    changeColor(evt, COAT_COLORS, coatColorInput);
  }

};

const onChangeFireballColor = (evt) => {
  if (evt.target.parentElement.matches(`.setup-fireball-wrap`)) {
    changeColor(evt, FIREBALL_COLORS, fireBallColorInput, true);
  }
};

setupWizard.addEventListener(`click`, onChangeWizardColor);
setupFireBall.addEventListener(`click`, onChangeFireballColor);
