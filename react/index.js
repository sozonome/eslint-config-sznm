/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    './extensions.js',
    /**
     * plugin:prettier/recommended should be positioned as last extension
     * https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
     */
    '../bare.js',
    './rules.js',
  ],
};
