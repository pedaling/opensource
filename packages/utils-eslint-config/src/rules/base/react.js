module.exports = {
  plugins: ['react'],
  rules: {
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-key': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-wrap-multilines': 0,
    'react/no-array-index-key': 1,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

    'react/function-component-definition': 'off',
  },
};
