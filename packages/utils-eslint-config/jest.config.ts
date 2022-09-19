import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'shared-utils-eslint-config',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/utils-eslint-config',
  coverageReporters: ['lcov'],
};

export default config;
