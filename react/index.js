const baseConfigs = require('../index');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...baseConfigs,
  extends: [...baseConfigs.extends, './base.js', './extensions.js'],
};
