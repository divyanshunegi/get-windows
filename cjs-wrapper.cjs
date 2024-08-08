'use strict';

let getWindowsModule;

async function importModule() {
  if (!getWindowsModule) {
    getWindowsModule = await import('./index.js');
  }
  return getWindowsModule;
}

async function activeWindow(...args) {
  const module = await importModule();
  return module.activeWindow(...args);
}

function activeWindowSync(...args) {
  return getWindowsModule.activeWindowSync(...args);
}

async function openWindows(...args) {
  const module = await importModule();
  return module.openWindows(...args);
}

function openWindowsSync(...args) {
  return getWindowsModule.openWindowsSync(...args);
}

module.exports = {
  activeWindow,
  activeWindowSync,
  openWindows,
  openWindowsSync,
  default: {
    activeWindow,
    activeWindowSync,
    openWindows,
    openWindowsSync
  }
};