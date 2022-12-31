import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'helix-core',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/helix-core',
  coverageReporters: ['lcov'],
};

export default config;
