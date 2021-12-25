const { fileAddresses } = require('../utils/fileAddresses');

const noPreferDefaultExportScopes = [
  'config',
  'constant',
  'helper',
  'hook',
  'lib',
  'loader',
  'model',
  'service',
  'style',
  'type',
  'util',
];

const noPreferDefaultExportFiles = noPreferDefaultExportScopes
  .map((scope) => fileAddresses(scope))
  .flat();

const storybookPaths = ['*stories*', '.storybook/**/*'];

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: './base.js',
  overrides: [
    {
      files: noPreferDefaultExportFiles,
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: storybookPaths,
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
