module.exports = {
  rules: {
    'class-methods-use-this': 0,
    'consistent-return': 'off',
    curly: ['error', 'all'],
    'jsx-quotes': ['error', 'prefer-double'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': 0,
    'no-alert': 'off',
    'no-await-in-loop': 0,
    'no-bitwise': 'off',
    'no-console': 'error',
    'no-continue': 0,
    'no-implicit-coercion': ['error', { string: true, number: true, boolean: true }],
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-underscore-dangle': 'off',
    'prefer-destructuring': [
      'error',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      { AssignmentExpression: { array: false, object: false }, VariableDeclarator: { array: false, object: true } },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'sort-keys': 0,
  },
};
