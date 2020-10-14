'use strict';

(function () {
  const MAX_SIMILAR_WIZARD_COUNT = 4;
  const similarListElement = document.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

  document.querySelector(`.setup-similar`).classList.remove(`hidden`);

  const renderWizards = function (wizard) {
    const wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = (wizards) => {
    const fragment = document.createDocumentFragment();
    similarListElement.innerHTML = ``;

    const takeNumber = wizards.length > MAX_SIMILAR_WIZARD_COUNT ? MAX_SIMILAR_WIZARD_COUNT : wizards.length;

    for (let i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizards(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

})();
