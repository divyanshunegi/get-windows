// cjs-wrapper.cjs
'use strict';

let getWindows;

module.exports = async (...args) => {
  if (!getWindows) {
    getWindows = (await import('./index.js')).default;
  }
  return getWindows(...args);
};

module.exports.default = module.exports;