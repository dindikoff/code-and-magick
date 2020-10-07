'use strict';

(function () {

  const Url = {
    'GET': `https://21.javascript.pages.academy/code-and-magick/data`,
    'POST': `https://21.javascript.pages.academy/code-and-magick`
  };

  const StatusCode = {
    OK: 200
  };
  const TIMEOUT_IN_MS = 10000;

  const networkOperation = (type, onSuccess, onError, data) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.open(type, Url[type]);

    xhr.addEventListener(`load`, () => {
      if (xhr.status === StatusCode.OK) {
        onSuccess(xhr.response);
      } else {
        onError(`Статус ответа ${xhr.status} ${xhr.statusText}`);
      }

    });

    xhr.addEventListener(`error`, () => {
      onError(`Произошла ошибка соединения`);
    });

    xhr.addEventListener(`timeout`, () => {
      onError(`Запрос не успел выполниться за ' + xhr.timeout + 'мс'`);
    });

    xhr.timeout = TIMEOUT_IN_MS;
    xhr.send(data);
  };

  const load = (onSuccess, onError) => {
    networkOperation(`GET`, onSuccess, onError);
  };

  const save = (data, onLoad, onError) => {
    networkOperation(`POST`, onLoad, onError, data);
  };

  window.backend = {
    load,
    save
  };

})();
