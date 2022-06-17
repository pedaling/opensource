import * as path from 'path';
import { mergeConfig } from 'vite';
import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
  stories: [],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-measure',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      cacheDir: path.join(
        __dirname,
        '../node_modules/.cache/.vite-storybook',
        viteConfig.root?.split('/').pop() ?? 'default'
      ),
      esbuild: {
        define: {
          this: 'window',
        },
      },
    });
  },
};

export default config;
