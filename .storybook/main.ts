import * as path from 'path';
import type { InlineConfig } from 'vite';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { StorybookViteConfig } from '@storybook/builder-vite';

const IS_NATIVE = process.env['STORYBOOK_REACT_NATIVE'] === 'true';

const config: StorybookViteConfig & { previewHead?: (head: string) => string } = {
  stories: [],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-measure',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
    'storybook-addon-performance/register',
  ].filter(Boolean),
  core: {
    builder: '@storybook/builder-vite',
  },
  previewHead: head => `
    ${head}
    <link
      href="https://cdn.class101.net/fonts/pretendard-1.3.0/pretendard-dynamic-subset.css"
      rel="preload"
      as="style"
    />
    <link href="https://cdn.class101.net/fonts/pretendard-1.3.0/pretendard-dynamic-subset.css" rel="stylesheet" />
  `,
  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      cacheDir: path.join(
        __dirname,
        `../node_modules/.cache/.vite-storybook${IS_NATIVE ? '-native' : ''}`,
        viteConfig.root?.split('/').pop() ?? 'default'
      ),
      resolve: {
        extensions: IS_NATIVE ? ['.native.ts', '.native.tsx', '.js', '.ts', '.jsx', '.tsx', '.json'] : undefined,
        alias: {
          'react-native': 'react-native-web',
        },
      },
      root: path.join(__dirname, '../'),
      esbuild: {
        define: {
          this: 'window',
        },
      },
      plugins: [tsconfigPaths()],
    } as InlineConfig);
  },
};

export default config;
