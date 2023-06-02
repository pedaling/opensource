import type { StorybookConfig } from '@storybook/react-vite';
import rootConfig from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootConfig,
  stories: ['../src/**/*.stories.tsx'],
};

export default config;
