// .eslintrc.js example
// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: "eslint:recommended",
//   parserOptions: {
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
// };

module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'/* , "prettier" */],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/test.tsx', '**/test.ts'] },
    ],
    '@typescript-eslint/indent': [2, 2],
    'import/extensions': [2, 'never'],
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
