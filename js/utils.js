'use strict';

(function () {
  const Key = {
    'ESCAPE': `Escape`,
    'ENTER': `Enter`
  };

  const getRandom = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const getRandomElement = (arr) => {
    return arr[getRandom(0, arr.length - 1)];
  };

  const getMaxElement = (arr) => {
    let maxElement = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  const createErrorMessage = (message) => {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = message;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.utils = {
    Key,
    getRandom,
    getRandomElement,
    getMaxElement,
    createErrorMessage
  };

})();
