module.exports = {
  plugins: ['import'],
  rules: {
    'import/extensions': 'off',
    'import/named': 2,
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 'off',
    'import/no-relative-packages': 'off',

    // `import` 문이 아래 설정된 그룹 순으로 정렬되어 있지 않으면 오류를 표시한다.
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: '@class101/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@*/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        // 동일한 그룹에선 오름차순으로 정렬한다.
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
