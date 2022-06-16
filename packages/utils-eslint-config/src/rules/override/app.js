module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['*.spec.ts', '*.spec.tsx', '**/__mocks__/**/*.ts', '*.d.ts'],
      rules: {
        'max-lines': [
          'warn',
          {
            max: 200,
            skipBlankLines: true,
            skipComments: false,
          },
        ],
      },
    },
  ],
};
