const importRules = require('./rules/import');
const javascriptRules = require('./rules/javascript');
const nxRules = require('./rules/nx');
const prettierRules = require('./rules/prettier');
const reactRules = require('./rules/react');
const reactHooksRules = require('./rules/react-hooks');
const typescriptRules = require('./rules/typescript');
const unusedImportsRules = require('./rules/unused-imports');

const eslintConfig = {
  extends: ['plugin:@nrwl/nx/javascript', 'prettier'],
  plugins: ['@nrwl/nx', 'prettier', 'react', 'react-hooks', 'import', 'unused-imports'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    ...nxRules,
    ...prettierRules,
    ...javascriptRules,
    ...reactRules,
    ...reactHooksRules,
    ...importRules,
    ...unusedImportsRules,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nrwl/nx/typescript'],
      rules: {
        ...typescriptRules,
      },
    },
    {
      files: ['*.mdx'],
      rules: {
        'unused-imports/no-unused-imports': ['off'],
      },
    },
    {
      files: ['*.resolver.ts', '*Repository.ts', '*.controller.ts'],
      rules: {
        '@typescript-eslint/consistent-type-imports': ['off'],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['*.spec.ts', '*.spec.tsx', '**/__mocks__/**/*.ts', '*.d.ts'],
      rules: {
        'max-lines': [
          'warn',
          {
            max: 200,
            skipBlankLines: true,
            skipComments: false,
          },
        ],
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};

module.exports = eslintConfig;
