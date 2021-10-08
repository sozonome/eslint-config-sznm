/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: './base.js',
  overrides: [
    {
      files: [
        '**/utils/**/*',
        '**/util/**/*',
        'utils/**/*',
        'util/**/*',

        '**/configs/**/*',
        '**/config/**/*',
        'configs/**/*',
        'config/**/*',

        '**/constants/**/*',
        '**/constant/**/*',
        'constants/**/*',
        'constant/**/*',

        '**/services/**/*',
        '**/service/**/*',
        'services/**/*',
        'service/**/*',
      ],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
