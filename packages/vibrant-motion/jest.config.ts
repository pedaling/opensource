import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  projects: ['packages/vibrant-motion/jest.config.web.ts', 'packages/vibrant-motion/jest.config.native.ts'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/packages/vibrant-motion',
  coverageReporters: ['lcov'],
};

export default config;
