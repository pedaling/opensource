module.exports = {
  plugins: ['react-hooks'],
  rules: {
    // `useCallback`, `useMemo`, `useEffect` 등을 사용할 때 의존성이 함께 제공되지 않으면 오류를 표시한다.
    'react-hooks/exhaustive-deps': [
      'error',
      {
        // autofix 옵션을 허용한다.
        enableDangerousAutofixThisMayCauseInfiniteLoops: true,
      },
    ],

    // 리액트 훅을 탑 레벨에서 사용하면 오류를 표시한다.
    'react-hooks/rules-of-hooks': 'error',
  },
};
