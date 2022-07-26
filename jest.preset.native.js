const expoPreset = require('jest-expo/jest-preset');
const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  ...expoPreset,
};
