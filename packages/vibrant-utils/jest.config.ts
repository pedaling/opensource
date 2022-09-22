import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  projects: ['packages/vibrant-utils/jest.config.web.ts', 'packages/vibrant-utils/jest.config.native.ts'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/vibrant-utils',
  coverageReporters: ['lcov'],
};

export default config;
