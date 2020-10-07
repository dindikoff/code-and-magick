'use strict';

(function () {
  const MAX_SIMILAR_WIZARD_COUNT = 4;
  const similarListElement = document.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

  document.querySelector(`.setup-similar`).classList.remove(`hidden`);

  const renderWizards = (wizards) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizards.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizards.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards.colorEyes;

    return wizardElement;
  };

  const successHandler = (wizards) => {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizards(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  window.backend.load(successHandler, window.modal.error);
})();
