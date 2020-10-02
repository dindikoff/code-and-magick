'use strict';

(function () {
  const KEYS = {
    'ESCAPE': `Escape`,
    'ENTER': `Enter`
  };

  const getRandom = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const getRandomElement = (arr) => {
    return arr[getRandom(0, arr.length - 1)];
  };

  window.utils = {
    KEYS,
    getRandom,
    getRandomElement
  };

})();
