module.exports = {
  plugins: ['unused-imports'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_|^(graphql)$',
      },
    ],
  },
  overrides: [
    {
      files: ['*.mdx'],
      rules: {
        'unused-imports/no-unused-imports': 'off',
      },
    },
  ],
};
