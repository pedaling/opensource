const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  setupFiles: [require.resolve('./tools/jest-setup.js')],
};
