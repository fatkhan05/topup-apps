const fs = require('fs');
const path = require('path');

const VERSION_FILE = path.join(__dirname, '..', 'version.json');

/**
 * Membaca version saat ini dari version.json
 * @returns {string} Version string (contoh: "1.0.0")
 */
function getCurrentVersion() {
  try {
    const versionData = JSON.parse(fs.readFileSync(VERSION_FILE, 'utf8'));
    return versionData.version;
  } catch (error) {
    console.error('Error reading version file:', error);
    return '1.0.0'; // Default version
  }
}

/**
 * Menulis version baru ke version.json
 * @param {string} newVersion - Version string baru (contoh: "1.0.0")
 */
function setVersion(newVersion) {
  try {
    const versionData = { version: newVersion };
    fs.writeFileSync(VERSION_FILE, JSON.stringify(versionData, null, 2) + '\n', 'utf8');
    console.log(`✅ Version updated to: ${newVersion}`);
  } catch (error) {
    console.error('Error writing version file:', error);
    throw error;
  }
}

/**
 * Parse version string menjadi object {major, minor, patch}
 * @param {string} version - Version string (contoh: "1.0.0")
 * @returns {{major: number, minor: number, patch: number}}
 */
function parseVersion(version) {
  const parts = version.split('.').map(Number);
  return {
    major: parts[0] || 0,
    minor: parts[1] || 0,
    patch: parts[2] || 0
  };
}

/**
 * Format version object menjadi string
 * @param {{major: number, minor: number, patch: number}} versionObj
 * @returns {string} Version string (contoh: "1.0.0")
 */
function formatVersion(versionObj) {
  return `${versionObj.major}.${versionObj.minor}.${versionObj.patch}`;
}

/**
 * Increment major version (1.0.0 -> 2.0.0)
 * Reset minor dan patch ke 0
 */
function incrementMajor() {
  const currentVersion = getCurrentVersion();
  const versionObj = parseVersion(currentVersion);
  versionObj.major += 1;
  versionObj.minor = 0;
  versionObj.patch = 0;
  const newVersion = formatVersion(versionObj);
  setVersion(newVersion);
  return newVersion;
}

/**
 * Increment minor version (1.0.0 -> 1.1.0)
 * Reset patch ke 0
 */
function incrementMinor() {
  const currentVersion = getCurrentVersion();
  const versionObj = parseVersion(currentVersion);
  versionObj.minor += 1;
  versionObj.patch = 0;
  const newVersion = formatVersion(versionObj);
  setVersion(newVersion);
  return newVersion;
}

/**
 * Increment patch version (1.0.0 -> 1.0.1)
 */
function incrementPatch() {
  const currentVersion = getCurrentVersion();
  const versionObj = parseVersion(currentVersion);
  versionObj.patch += 1;
  const newVersion = formatVersion(versionObj);
  setVersion(newVersion);
  return newVersion;
}

// Export functions untuk digunakan sebagai module
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getCurrentVersion,
    setVersion,
    parseVersion,
    formatVersion,
    incrementMajor,
    incrementMinor,
    incrementPatch
  };
}

// Jika dijalankan langsung dari command line
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case 'major':
      incrementMajor();
      break;
    case 'minor':
      incrementMinor();
      break;
    case 'patch':
      incrementPatch();
      break;
    case 'get':
      console.log(`Current version: ${getCurrentVersion()}`);
      break;
    default:
      console.log('Usage: node utils/version.js [major|minor|patch|get]');
      console.log('  major - Increment major version (1.0.0 -> 2.0.0)');
      console.log('  minor - Increment minor version (1.0.0 -> 1.1.0)');
      console.log('  patch - Increment patch version (1.0.0 -> 1.0.1)');
      console.log('  get   - Show current version');
      process.exit(1);
  }
}

