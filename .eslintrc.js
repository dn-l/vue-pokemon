module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],

  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        projectName: 'app',
        schemaJsonFilepath: 'node_modules/graphql-pokemon/schemas/schema.json',
      },
    ],
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],

  plugins: [
    'graphql',
  ],
};
