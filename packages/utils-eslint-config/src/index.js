const importRules = require('./rules/import');
const javascriptRules = require('./rules/javascript');
const nxRules = require('./rules/nx');
const prettierRules = require('./rules/prettier');
const reactRules = require('./rules/react');
const reactHooksRules = require('./rules/react-hooks');
const typescriptRules = require('./rules/typescript');
const unusedImportsRules = require('./rules/unused-imports');

/** @type {import('eslint').ESLint.ConfigData} */
const eslintConfig = {
  extends: ['prettier'],
  plugins: ['prettier', 'react', 'react-hooks', 'import', 'unused-imports'],
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
      extends: [],
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
    {
      files: ['*.spec.ts', '*.spec.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': ['off'],
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
