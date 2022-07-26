const javascriptRules = {
  'arrow-body-style': ['error'],
  'class-methods-use-this': ['off'],
  'consistent-return': ['off'],
  curly: ['error', 'all'],
  'jsx-quotes': ['error', 'prefer-double'],
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  'max-classes-per-file': ['off'],
  'no-alert': ['off'],
  'no-await-in-loop': ['off'],
  'no-bitwise': ['off'],
  'no-console': ['error'],
  'no-continue': ['off'],
  'no-empty-function': ['off'],
  'no-implicit-coercion': ['error', { string: true, number: true, boolean: true }],
  'no-param-reassign': ['error', { props: false }],
  'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
  'no-underscore-dangle': ['off'],
  'prefer-destructuring': [
    'error',
    { AssignmentExpression: { array: false, object: false }, VariableDeclarator: { array: false, object: true } },
  ],
  quotes: ['error', 'single', { avoidEscape: true }],
  'sort-imports': ['error', { ignoreDeclarationSort: true }],
  'sort-keys': ['off'],
};

module.exports = javascriptRules;
