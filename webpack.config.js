const path = require('path');

module.exports = {
  entry: [
    './js/utils.js',
    './js/debounce.js',
    './js/backend.js',
    './js/render.js',
    './js/data.js',
    './js/stat.js',
    './js/modal.js',
    './js/move.js',
    './js/wizard.js',
    './js/setup.js',
    './js/avatar.js',
    './js/game.js'
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },

  devtool: false

};
