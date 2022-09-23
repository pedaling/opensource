import type { StorybookViteConfig } from '@storybook/builder-vite';
import rootConfig from '../../../.storybook/main';

const config: StorybookViteConfig = {
  ...rootConfig,
  stories: ['../src/**/*.stories.tsx'],
};

export default config;
