'use strict';

(function () {
  const similarListElement = document.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

  document.querySelector(`.setup-similar`).classList.remove(`hidden`);

  const wizardsList = window.data.generateWizards(window.data.WIZARD_COUNT);

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

})();
