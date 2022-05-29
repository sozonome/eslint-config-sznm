# eslint-config-sznm ✨

ESLint rules I use throughout my personal projects with bundled dependencies.

## ❗ Before Installation

> ⚠️❗ I made this config with support for Next.js / React + TypeScript as first priority in mind. There might be some rules that you need to disable if your project is a mixed JS/TS or JS only codebase.

[![Verified on Openbase](https://badges.openbase.com/js/verified/eslint-config-sznm.svg?token=WMJtqJWWgtIcQCNFBjYV1N7q5TWlbsTdRv859wcTj6I=)](https://openbase.com/js/eslint-config-sznm?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge) [![Rate this package](https://badges.openbase.com/js/rating/eslint-config-sznm.svg?token=WMJtqJWWgtIcQCNFBjYV1N7q5TWlbsTdRv859wcTj6I=)](https://openbase.com/js/eslint-config-sznm?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

## 🔧 Installation

```bash
npm i --save-dev eslint eslint-config-sznm

# or (if using yarn)

yarn add -D eslint eslint-config-sznm
```

## :computer: Usage

add the extends to your project's eslintrc config
(`.eslintrc.js` or other extensions whichever you use in your project)

### ⚡ Next.js Projects

make sure `eslint-config-next` is installed (as `devDependencies`)

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['sznm/react', 'plugin:@next/next/recommended'],
};
```

optional:

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'sznm/react',
    'plugin:react/jsx-runtime', // to switch off jsx (import React) warning
    'plugin:@next/next/recommended',
  ],
};
```

### ⚛️ React Projects

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['sznm/react'],
};
```

### 🟨 Non React Projects

> ❗⚠️ [WIP] still tinkering around here, I made this config with support for Next.js and React + TypeScript as first priority in mind.

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['sznm'],
};
```

## 🐣 Rules

`eslint-config-sznm` extends from and uses these configurations & plugins:

- `eslint-config-airbnb`: [airbnb](https://airbnb.io/projects/javascript/)'s javascript styleguide
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier#readme): to turns off all rules that are unnecessary or might conflict with Prettier.
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier#readme): runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
- `eslint-plugin-sonarjs`: SonarJS rules for ESLint to detect bugs and suspicious patterns in your code.

## 📣 Suggestions

feel free to give feedbacks or suggestions or start a discussion in [Github discussions](https://github.com/sozonome/eslint-config-sznm/discussions) of the repo.
