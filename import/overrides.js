const { fileAddresses } = require('../utils/fileAddresses');

const noPreferDefaultExportScopes = [
  'config',
  'constant',
  'helper',
  'lib',
  'model',
  'service',
  'style',
  'type',
  'util',
];

const noPreferDefaultExportFiles = noPreferDefaultExportScopes
  .map((scope) => fileAddresses(scope))
  .flat();

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
  ],
};
