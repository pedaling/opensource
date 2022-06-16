module.exports = {
  extends: ['plugin:@nrwl/nx/javascript', 'plugin:@nrwl/nx/typescript'],
  plugins: ['@nrwl/nx'],
  rules: {
    '@nrwl/nx/enforce-module-boundaries': [
      'error',
      {
        enforceBuildableLibDependency: true,
        allow: [],
        depConstraints: [
          // Type Constraints
          {
            sourceTag: 'type:app',
            onlyDependOnLibsWithTags: [
              'type:shell',
              'type:feature',
              'type:provider',
              'type:ui',
              'type:utils',
              'type:domain',
              'type:datasource',
              'type:presentation',
            ],
          },
          {
            sourceTag: 'type:shell',
            onlyDependOnLibsWithTags: ['type:feature', 'type:provider', 'type:ui', 'type:utils'],
          },
          {
            sourceTag: 'type:feature',
            onlyDependOnLibsWithTags: ['type:provider', 'type:ui', 'type:utils'],
          },
          {
            sourceTag: 'type:provider',
            onlyDependOnLibsWithTags: ['type:provider', 'type:utils'],
          },
          {
            sourceTag: 'type:ui',
            onlyDependOnLibsWithTags: ['type:ui', 'type:utils'],
          },
          {
            sourceTag: 'type:utils',
            onlyDependOnLibsWithTags: ['type:utils'],
          },
          {
            sourceTag: 'type:domain',
            onlyDependOnLibsWithTags: ['type:utils'],
          },
          {
            sourceTag: 'type:datasource',
            onlyDependOnLibsWithTags: ['type:domain', 'type:utils', 'type:provider'],
          },
          {
            sourceTag: 'type:presentation',
            onlyDependOnLibsWithTags: ['type:domain', 'type:utils'],
          },
          // Scope Constraints
          {
            sourceTag: 'scope:shared',
            onlyDependOnLibsWithTags: ['scope:shared'],
          },
          {
            sourceTag: 'scope:account',
            onlyDependOnLibsWithTags: ['scope:account', 'scope:shared'],
          },
        ],
      },
    ],
  },
};
