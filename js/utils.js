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

  window.utils = {
    Key,
    getRandom,
    getRandomElement,
    getMaxElement
  };

})();
