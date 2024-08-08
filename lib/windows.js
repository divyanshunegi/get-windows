const path = require('node:path');
const fs = require('node:fs');
const preGyp = require('@mapbox/node-pre-gyp');

const getAddon = () => {
    const bindingPath = preGyp.find(path.resolve(path.join(__dirname, '../package.json')));

    return (fs.existsSync(bindingPath)) ? require(bindingPath) : {
        getActiveWindow() {},
        getOpenWindows() {},
    };
};

function activeWindow() {
    return getAddon().getActiveWindow();
}

function activeWindowSync() {
    return getAddon().getActiveWindow();
}

function openWindows() {
    return getAddon().getOpenWindows();
}

function openWindowsSync() {
    return getAddon().getOpenWindows();
}

module.exports = {
    activeWindow,
    activeWindowSync,
    openWindows,
    openWindowsSync
};