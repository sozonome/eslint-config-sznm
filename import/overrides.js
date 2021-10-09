/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: './base.js',
  overrides: [
    {
      files: [
        '**/configs/**/*',
        '**/config/**/*',
        'configs/**/*',
        'config/**/*',

        '**/constants/**/*',
        '**/constant/**/*',
        'constants/**/*',
        'constant/**/*',

        '**/models/**/*',
        '**/model/**/*',
        'models/**/*',
        'model/**/*',

        '**/services/**/*',
        '**/service/**/*',
        'services/**/*',
        'service/**/*',

        '**/types/**/*',
        '**/type/**/*',
        'types/**/*',
        'type/**/*',

        '**/utils/**/*',
        '**/util/**/*',
        'utils/**/*',
        'util/**/*',
      ],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
