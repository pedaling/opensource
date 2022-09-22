import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'workspace-plugin',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/workspace-plugin',
  coverageReporters: ['lcov'],
};

export default config;
