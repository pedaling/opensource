import * as path from 'path';
import type { InlineConfig } from 'vite';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { StorybookViteConfig } from '@storybook/builder-vite';

const IS_NATIVE = process.env['STORYBOOK_REACT_NATIVE'] === 'true';

const config: StorybookViteConfig = {
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
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
      tsconfigPath: require.resolve('../tsconfig.base.json'),
      propFilter: prop => {
        if (prop.parent && /node_modules/.test(prop.parent.fileName)) {
          return false;
        }

        if (prop.type.value && Array.isArray(prop.type.value)) {
          // Extract Responsive Value Type
          const filteredValue = prop.type.value.filter(
            ({ value }) => !['string', 'number', 'boolean', 'undefined'].includes(value) && value.indexOf('[]') < 0
          );

          if (filteredValue.length === 0) {
            const subFilteredValue = prop.type.value.filter(
              ({ value }) => value !== 'undefined' && value.indexOf('[]') < 0
            );

            if (subFilteredValue.length === 1) {
              prop.type.name = subFilteredValue[0].value;
            } else {
              prop.type.name = 'string';
            }
          } else if (
            filteredValue.every(
              ({ value }) => typeof value === 'string' && value[0] !== '"' && !['true', 'false'].includes(value)
            )
          ) {
            return false;
          }
          prop.type.value = filteredValue;
        }

        return true;
      },
    },
  },
  core: {
    builder: '@storybook/builder-vite',
  },
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
