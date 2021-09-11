/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    './base.js',
    /**
     * plugin:prettier/recommended should be positioned as last extension
     * https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
     */
    './plugins.js',
    './rules.js',
    './import/index.js',
  ],
};
