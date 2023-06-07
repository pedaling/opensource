import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'vibrant-theme',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/vibrant-theme',
  coverageReporters: ['lcov'],
};

export default config;
