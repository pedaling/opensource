import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  projects: ['packages/vibrant-layouts/jest.config.web.ts', 'packages/vibrant-layouts/jest.config.native.ts'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/vibrant-layouts',
  coverageReporters: ['lcov'],
};

export default config;
