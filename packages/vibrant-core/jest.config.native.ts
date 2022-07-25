// eslint-disable-next-line @typescript-eslint/no-var-requires
const reactNativePreset = require('react-native/jest-preset');

export default {
  displayName: 'vibrant-core-native',
  preset: '../../jest.preset.native.js',
  testMatch: ['**/+(*.)+(spec|test).+(native).+(ts|js)?(x)'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/vibrant-core',
  ...reactNativePreset,
};
