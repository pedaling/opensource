const javascriptRules = require('./javascript');

const typescriptRules = {
  ...['lines-between-class-members', 'no-empty-function'].reduce(
    (prevRules, name) => ({
      ...prevRules,
      [name]: 'off',
      [`@typescript-eslint/${name}`]: javascriptRules[name],
    }),
    {}
  ),
  '@typescript-eslint/array-type': ['error', { default: 'array' }],
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
  '@typescript-eslint/dot-notation': ['off'],
  '@typescript-eslint/explicit-module-boundary-types': ['off'],
  '@typescript-eslint/method-signature-style': ['error', 'property'],
  '@typescript-eslint/no-implied-eval': ['off'],
  '@typescript-eslint/no-namespace': ['off'],
  '@typescript-eslint/no-throw-literal': ['off'],
  '@typescript-eslint/no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  '@typescript-eslint/no-unused-vars': ['warn'],
  '@typescript-eslint/no-use-before-define': ['off'],
  '@typescript-eslint/padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: '*', next: 'return' },
    { blankLine: 'always', prev: ['expression'], next: ['expression'] },
    { blankLine: 'always', prev: ['if'], next: '*' },
    { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
    { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
  ],
  '@typescript-eslint/return-await': ['off'],
  '@typescript-eslint/sort-type-union-intersection-members': ['error', { checkIntersections: false }],
  '@typescript-eslint/triple-slash-reference': ['off'],

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

    // type의 property는 기본적으로 camelCase, PascalCase이다
    { selector: 'typeProperty', format: ['strictCamelCase', 'StrictPascalCase'] },

    {
      selector: ['typeProperty', 'objectLiteralProperty', 'parameter'],
      format: null,
      filter: { regex: '^(web|native|ios|android)_', match: true },
    },

    // 일부 단어들을 허용한다
    {
      selector: ['default', 'variable', 'typeLike', 'typeProperty'],
      format: null,
      filter: {
        regex: '(VStack|HStack|ZStack|CSS|Pretendard|HTML|ZIndex|JSON)',
        match: true,
      },
    },

    // 일부 스타일들을 허용한다
    {
      selector: ['objectLiteralProperty'],
      format: null,
      filter: {
        regex: '^(Moz|Webkit)',
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
};

module.exports = typescriptRules;
