export default {
  displayName: 'vibrant-core-native',
  preset: '../../jest.preset.native.js',
  testMatch: ['**/+(*.)+(spec|test).+(native).+(ts|js)?(x)'],
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel', '@babel/preset-flow'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
