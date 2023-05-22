import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'vibrant-example-app',
  resolver: '@nx/jest/plugins/resolver',
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  moduleNameMapper: {
    '.svg': '@nx/expo/plugins/jest/svg-mock',
  },
  transform: {
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp|ttf)$': require.resolve('react-native/jest/assetFileTransformer.js'),
  },
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/vibrant-example-app',
  coverageReporters: ['lcov'],
};

export default config;
