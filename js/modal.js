'use strict';

(function () {

  const userDialog = document.querySelector(`.setup`);
  const userDialogOpen = document.querySelector(`.setup-open`);
  const userDialogClose = userDialog.querySelector(`.setup-close`);
  const userNameInput = userDialog.querySelector(`.setup-user-name`);

  const MODAL_DEFAULT_POSITION = {
    'LEFT': 722,
    'TOP': 80
  };

  const onModalEscPress = function (evt) {
    if (evt.key === window.utils.KEYS.ESCAPE && evt.target !== userNameInput) {
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
    userDialog.style.top = MODAL_DEFAULT_POSITION.TOP + `px`;
    userDialog.style.left = MODAL_DEFAULT_POSITION.LEFT + `px`;
    document.removeEventListener(`keydown`, onModalEscPress);
  };

  userDialogOpen.addEventListener(`click`, openModal);

  userDialogOpen.addEventListener(`keydown`, function (evt) {
    if (evt.key === window.utils.KEYS.ENTER) {
      openModal();
    }
  });

  userDialogClose.addEventListener(`click`, function () {
    closeModal();
  });

  userDialogClose.addEventListener(`keydown`, function (evt) {
    if (evt.key === window.utils.KEYS.ENTER) {
      closeModal();
    }
  });


})();
