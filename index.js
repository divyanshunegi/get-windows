const process = require('node:process');
const macos = require('./lib/macos.js');
const linux = require('./lib/linux.js');
const windows = require('./lib/windows.js');

async function activeWindow(options) {
    if (process.platform === 'darwin') {
        return macos.activeWindow(options);
    }

    if (process.platform === 'linux') {
        return linux.activeWindow(options);
    }

    if (process.platform === 'win32') {
        return windows.activeWindow(options);
    }

    throw new Error('macOS, Linux, and Windows only');
}

function activeWindowSync(options) {
    if (process.platform === 'darwin') {
        return macos.activeWindowSync(options);
    }

    if (process.platform === 'linux') {
        return linux.activeWindowSync(options);
    }

    if (process.platform === 'win32') {
        return windows.activeWindowSync(options);
    }

    throw new Error('macOS, Linux, and Windows only');
}

async function openWindows(options) {
    if (process.platform === 'darwin') {
        return macos.openWindows(options);
    }

    if (process.platform === 'linux') {
        return linux.openWindows(options);
    }

    if (process.platform === 'win32') {
        return windows.openWindows(options);
    }

    throw new Error('macOS, Linux, and Windows only');
}

function openWindowsSync(options) {
    if (process.platform === 'darwin') {
        return macos.openWindowsSync(options);
    }

    if (process.platform === 'linux') {
        return linux.openWindowsSync(options);
    }

    if (process.platform === 'win32') {
        return windows.openWindowsSync(options);
    }

    throw new Error('macOS, Linux, and Windows only');
}

module.exports = {
    activeWindow,
    activeWindowSync,
    openWindows,
    openWindowsSync
};