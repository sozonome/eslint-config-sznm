/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    './base.js',
    './extensions.js',
    './plugins.js',
    './rules.js',
    './import/index.js',
  ],
};
