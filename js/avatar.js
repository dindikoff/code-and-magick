'use strict';

const fileChooser = document.querySelector(`.upload input[type="file"]`);
const userPicPopup = document.querySelector(`.setup-user-pic`);

const FILE_TYPES = [`gif`, `jpg`, `jpeg`, `png`];

fileChooser.addEventListener(`change`, () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = window.utils.matches(FILE_TYPES, fileName);

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener(`load`, () => {
      userPicPopup.src = reader.result;
    });

    reader.readAsDataURL(file);
  }

});
