import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'vibrant-components-web',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/vibrant-components',
  coverageReporters: ['lcov'],
  snapshotSerializers: ['@emotion/jest/serializer'],
};

export default config;
