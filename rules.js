/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: './base.js',
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    complexity: 'warn',
    'no-console': 'error',
  },
};
