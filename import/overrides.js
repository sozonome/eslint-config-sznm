const { fileAddresses } = require('../utils/fileAddresses');

const noPreferDefaultExportFiles = [
  ...fileAddresses('config'),
  ...fileAddresses('constant'),
  ...fileAddresses('model'),
  ...fileAddresses('service'),
  ...fileAddresses('style'),
  ...fileAddresses('type'),
  ...fileAddresses('util'),
];

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
