/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    './base.js',
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    /**
     * plugin:prettier/recommended should be positioned as last extension
     * https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
     */
    'plugin:prettier/recommended',
  ],
};
