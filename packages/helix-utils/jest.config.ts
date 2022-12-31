import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'helix-utils',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/helix-utils',
  coverageReporters: ['lcov'],
};

export default config;
