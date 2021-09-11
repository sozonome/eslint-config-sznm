/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    './base.js',
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
  ],
};
