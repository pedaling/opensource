const reactHooksRules = {
  'react-hooks/exhaustive-deps': [
    'error',
    {
      enableDangerousAutofixThisMayCauseInfiniteLoops: true,
    },
  ],
  'react-hooks/rules-of-hooks': ['error'],
};

module.exports = reactHooksRules;
