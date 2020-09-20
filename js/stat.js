'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const BAR_GAP = 50;
const FONT_GAP = 30;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.3)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.font = `16px PT Mono`;
  ctx.fillStyle = `#000`;
  ctx.fillText(
      `Ура вы победили!`,
      CLOUD_X + FONT_GAP,
      CLOUD_Y + GAP * 3
  );

  ctx.fillText(
      `Список результатов:`,
      CLOUD_X + FONT_GAP,
      CLOUD_Y + GAP * 5
  );

  const maxTime = getMaxElement(times);
  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillText(
        players[i], CLOUD_X + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT - GAP
    );

    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT - FONT_GAP - GAP - (BAR_HEIGHT * times[i]) / maxTime);

    if (players[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(240, ` + Math.floor(Math.random() * 100) + `%, 50%)`;
    }

    ctx.fillRect(
        CLOUD_X + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT - FONT_GAP - (BAR_HEIGHT * times[i]) / maxTime,
        BAR_WIDTH,
        (BAR_HEIGHT * times[i] / maxTime)
    );
  }
};
