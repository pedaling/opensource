import * as path from 'path';
import type { InlineConfig } from 'vite';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { StorybookViteConfig } from '@storybook/builder-vite';

const IS_NATIVE = process.env['STORYBOOK_REACT_NATIVE'] === 'true';

const storybookLibraries = ['vibrant-core', 'vibrant-components', 'vibrant-icons'];

const config: StorybookViteConfig & { previewHead?: (head: string) => string } = {
  stories: storybookLibraries.map(name => ({
    directory: `../packages/${name}`,
    files: '**/*.stories.tsx',
    titlePrefix: name,
  })),
  features: {
    storyStoreV7: true,
  },
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
    check: true,
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

          if (filteredValue[0]?.value === 'false' && filteredValue[1]?.value === 'true') {
            prop.type.name = 'boolean';
          } else {
            prop.type.value = filteredValue;
          }
        }

        return true;
      },
    },
  },
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
