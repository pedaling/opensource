import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  projects: ['packages/vibrant-core/jest.config.web.ts', 'packages/vibrant-core/jest.config.native.ts'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/vibrant-core',
  coverageReporters: ['lcov'],
};

export default config;
