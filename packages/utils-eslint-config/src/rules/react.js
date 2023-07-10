const reactRules = {
  'react/function-component-definition': ['off'],
  'react/jsx-boolean-value': ['error', 'always'],
  'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  'react/jsx-key': ['error'],
  'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
  'react/jsx-props-no-spreading': ['off'],
  'react/jsx-uses-react': ['off'],
  'react/jsx-wrap-multilines': ['off'],
  'react/no-array-index-key': ['off'],
  'react/no-unused-prop-types': ['off'],
  'react/prop-types': ['off'],
  'react/react-in-jsx-scope': ['off'],
  'react/require-default-props': ['off'],
  'react/sort-comp': ['off'],
  'react/state-in-constructor': ['off'],
  'react/static-property-placement': ['off'],
  'react/self-closing-comp': ['error'],
};

module.exports = reactRules;
