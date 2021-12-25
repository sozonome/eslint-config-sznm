const fileAddresses = (scope) => {
  return [
    `**/${scope}s/**/*`,
    `**/${scope}/**/*`,
    `${scope}s/**/*`,
    `${scope}/**/*`,
    `*${scope}s*`,
    `*${scope}*`,
  ];
};

module.exports = { fileAddresses };
