import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'vibrant-forms-web',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/vibrant-forms',
  coverageReporters: ['lcov'],
  snapshotSerializers: ['@emotion/jest/serializer'],
};

export default config;
