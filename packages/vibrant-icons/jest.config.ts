import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  projects: ['packages/vibrant-icons/jest.config.web.ts', 'packages/vibrant-icons/jest.config.native.ts'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/vibrant-icons',
  coverageReporters: ['lcov'],
};

export default config;
