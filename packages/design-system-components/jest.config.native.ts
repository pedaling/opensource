// eslint-disable-next-line @typescript-eslint/no-var-requires
const reactNativePreset = require('react-native/jest-preset');

export default {
  displayName: 'design-system-components-native',
  preset: '../../jest.preset.js',
  testMatch: ['**/+(*.)+(spec|test).+(native).+(ts|js)?(x)'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/design-system-components',
  ...reactNativePreset,
};
