'use strict';

(function () {

  const userDialog = document.querySelector(`.setup`);
  const userDialogOpen = document.querySelector(`.setup-open`);
  const userDialogClose = userDialog.querySelector(`.setup-close`);
  const userNameInput = userDialog.querySelector(`.setup-user-name`);
  const form = userDialog.querySelector(`.setup-wizard-form`);

  const MODAL_DEFAULT_POSITION = {
    'LEFT': 722,
    'TOP': 80
  };

  const onModalEscPress = function (evt) {
    if (evt.key === window.utils.Key.ESCAPE && evt.target !== userNameInput) {
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
    if (evt.key === window.utils.Key.ENTER) {
      openModal();
    }
  });

  userDialogClose.addEventListener(`click`, function () {
    closeModal();
  });

  userDialogClose.addEventListener(`keydown`, function (evt) {
    if (evt.key === window.utils.Key.ENTER) {
      closeModal();
    }
  });

  const loadHandler = () => {
    userDialog.classList.add(`hidden`);
  };

  const errorHandler = (errorMessage) => {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  form.addEventListener(`submit`, (evt) => {
    window.backend.save(new FormData(form), loadHandler, errorHandler);
    evt.preventDefault();
  });

  window.modal = {
    'error': errorHandler
  };

})();
