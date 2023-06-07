import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'vibrant-components-test-web',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/vibrant-components',
  coverageReporters: ['lcov'],
  snapshotSerializers: ['@emotion/jest/serializer'],
};

export default config;
