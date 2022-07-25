const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  setupFilesAfterEnv: ['jest-expo/src/preset/setup'],
};
