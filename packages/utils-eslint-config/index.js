module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [],
  extends: [
    ...['airbnb', 'airbnb-typescript', 'plugin:@typescript-eslint/eslint-recommended'],
    ...[
      './src/rules/base/prettier.js',
      './src/rules/base/nx.js',
      './src/rules/base/javascript.js',
      './src/rules/base/typescript.js',
      './src/rules/base/import.js',
      './src/rules/base/unused-imports.js',
      './src/rules/base/react.js',
      './src/rules/base/react-hooks.js',
      './src/rules/override/app.js',
    ].map(require.resolve),
  ],
};
