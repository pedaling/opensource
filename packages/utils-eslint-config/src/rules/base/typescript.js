module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-implied-eval': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-throw-literal': 0,
    '@typescript-eslint/no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^(query|mutation|fragment|_)$' }],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',

    // 클래스 멤버 사이에는 한 줄로 띄워져 있어야 한다.
    // 단, 한 줄로 끝나는 코드의 경우 예외적으로 이 규칙이 적용되지 않는다.
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // 타입 정의에 interface 키워드 대신 type 키워드를 사용해야 한다.
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],

    // 함수 타입의 경우 fn: () => void; 형태로 선언해야 한다.
    '@typescript-eslint/method-signature-style': ['error', 'property'],

    // 네이밍 컨벤션
    '@typescript-eslint/naming-convention': [
      'error',
      // 기본적인 네이밍은 camelCase여야함
      { selector: 'default', format: ['strictCamelCase'] },
      // 제네릭의 이름은 두글자 이상이여야한다
      {
        selector: 'typeParameter',
        format: ['StrictPascalCase'],
        custom: {
          regex: '^.{2}',
          match: true,
        },
      },
      // 일반 변수는 camelCase여야한다
      { selector: 'variable', format: ['strictCamelCase'] },
      // 글로벌 스코프 상수는 camelCase, PascalCase, UPPER_CASE가 올 수 있음
      {
        selector: 'variable',
        format: ['strictCamelCase', 'UPPER_CASE', 'StrictPascalCase'],
        modifiers: ['global', 'const'],
      },
      // 타입 정의는 PascalCase
      { selector: 'typeLike', format: ['StrictPascalCase'] },
      // type의 property는 기본적으로 camelCase다
      { selector: 'typeProperty', format: ['strictCamelCase'] },

      {
        selector: ['typeProperty', 'objectLiteralProperty', 'parameter'],
        format: null,
        filter: { regex: '^(web|native|ios|android)_', match: true },
      },

      // `KR`, `US`, `JP`, `KRW`, `USD`, `JPY`, `AUID` 허용
      {
        selector: ['default', 'variable', 'typeLike', 'enumMember', 'typeProperty', 'objectLiteralProperty'],
        format: null,
        filter: {
          regex: '(KR|US|JP|KRW|USD|JPY|AUID)',
          match: true,
        },
      },

      // `VStack`, `HStack`, `ZStack`, `graphQL`, `Class101App`은 허용한다
      {
        selector: ['default', 'variable', 'typeLike'],
        format: null,
        filter: {
          regex: '^(VStack|HStack|ZStack|graphQL|Class101App)',
          match: true,
        },
      },

      // 맨 앞이 동사인 경우 `camelCase`로 쓴다.
      // 바로 뒤에 나오는 `...Component` 규칙에 예외를 두기 위해 이 규칙을 추가했다.
      {
        selector: ['default', 'typeProperty', 'variable'],
        filter: {
          regex: '^(change|convert|create|delete|find|generate|get|make|modify|remove|render|update)',
          match: true,
        },
        format: ['strictCamelCase'],
      },

      // `...Component` 형태로 끝나는 이름은 `PascalCase`로 쓴다.
      {
        selector: ['default', 'typeProperty', 'variable'],
        filter: { regex: 'Component[s]?$', match: true },
        format: ['StrictPascalCase'],
      },
      // _id와 __typename은 허용된다
      {
        selector: ['typeProperty', 'objectLiteralProperty', 'classProperty'],
        format: null,
        filter: { regex: '^(_id|__typename)$', match: true },
      },
      // __html은 허용된다
      {
        selector: ['objectLiteralProperty'],
        format: null,
        filter: { regex: '^(__html|dangerouslySetInnerHTML)$', match: true },
      },
      // __variable__ 은 허용한다
      {
        selector: ['typeProperty', 'objectLiteralProperty'],
        format: null,
        filter: { regex: '^__(.*)__$', match: true },
      },
      // enum의 이름은 PascalCase로 사용한다
      { selector: 'enum', format: ['StrictPascalCase'] },
      // enum의 member는 PascalCase로 사용한다
      { selector: 'enumMember', format: ['StrictPascalCase'] },
      // 사용하지 않는 파리미터는 _를 허용한다
      {
        selector: ['parameter', 'variable'],
        modifiers: ['unused'],
        format: null,
        custom: { regex: '^_', match: true },
      },
      // object에서 destructuring된 값들은 룰을 적용시키지 않는다
      { selector: 'variable', modifiers: ['destructured'], format: null },
      // 따음표로 감싼 프로퍼티 키는 전부 허용한다
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.resolver.ts', '*Repository.ts'],
      rules: {
        '@typescript-eslint/consistent-type-imports': 'off',
      },
    },
    {
      files: ['*.mdx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
