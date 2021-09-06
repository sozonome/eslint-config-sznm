/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['airbnb-typescript'],
    },
  ],
};
