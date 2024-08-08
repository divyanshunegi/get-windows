const path = require('node:path');
const { promisify } = require('node:util');
const childProcess = require('node:child_process');

const execFile = promisify(childProcess.execFile);
const binary = path.join(__dirname, '../main');

const parseMac = stdout => {
    try {
        return JSON.parse(stdout);
    } catch (error) {
        console.error(error);
        throw new Error('Error parsing window data');
    }
};

const getArguments = options => {
    if (!options) {
        return [];
    }

    const arguments_ = [];
    if (options.accessibilityPermission === false) {
        arguments_.push('--no-accessibility-permission');
    }

    if (options.screenRecordingPermission === false) {
        arguments_.push('--no-screen-recording-permission');
    }

    return arguments_;
};

async function activeWindow(options) {
    const { stdout } = await execFile(binary, getArguments(options));
    return parseMac(stdout);
}

function activeWindowSync(options) {
    const stdout = childProcess.execFileSync(binary, getArguments(options), { encoding: 'utf8' });
    return parseMac(stdout);
}

async function openWindows(options) {
    const { stdout } = await execFile(binary, [...getArguments(options), '--open-windows-list']);
    return parseMac(stdout);
}

function openWindowsSync(options) {
    const stdout = childProcess.execFileSync(binary, [...getArguments(options), '--open-windows-list'], { encoding: 'utf8' });
    return parseMac(stdout);
}

module.exports = {
    activeWindow,
    activeWindowSync,
    openWindows,
    openWindowsSync
};