> [!WARNING]  
> This library is deprecated, as some of the dependencies being used in this library has also been deprecated. It's recommended to switch to alternatives:
> - https://biomejs.dev
> - https://https://oxc.rs/docs/guide/usage/linter
> - https://sznm.dev/notes/eslint-config-sznm

> [!NOTE]  
> This config library only works for:
> - Next.js v14 or earlier version
> - eslint v8 or earlier
> - projects with @typescript-eslint v7 or earlier

<img src="https://og.sznm.dev/api/generate?heading=eslint-config-sznm%20%E2%9C%A8&text=sozonome%27s%20personal%20eslint%20rules%20with%20bundled%20dependencies.&template=color&center=true&height=320" />

---

[![npm](https://img.shields.io/npm/v/eslint-config-sznm.svg)](https://www.npmjs.com/package/eslint-config-sznm)
[![npm](https://img.shields.io/npm/dt/eslint-config-sznm.svg)](https://npm-stat.com/charts.html?package=eslint-config-sznm)

[![Verified on Openbase](https://badges.openbase.com/js/verified/eslint-config-sznm.svg?token=WMJtqJWWgtIcQCNFBjYV1N7q5TWlbsTdRv859wcTj6I=)](https://openbase.com/js/eslint-config-sznm?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge) [![Rate this package](https://badges.openbase.com/js/rating/eslint-config-sznm.svg?token=WMJtqJWWgtIcQCNFBjYV1N7q5TWlbsTdRv859wcTj6I=)](https://openbase.com/js/eslint-config-sznm?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

## ⚠️ Pre-Requisites

eslint-config-sznm v2.x+ only supports prettier v3 as prettier v3 is a breaking change and it applies to its related eslint plugins.
If your project is using prettier v2, please install eslint-config-sznm v1.1.2 🙏

## 🔧 Installation

### If your project uses prettier v3

```bash
npm i --save-dev eslint eslint-config-sznm

# or (if using yarn)
yarn add -D eslint eslint-config-sznm

# or (if using pnpm)
pnpm i -D eslint eslint-config-sznm
```

### If your project uses prettier v2

```bash
npm i --save-dev eslint eslint-config-sznm@^1.1.2

# or (if using yarn)
yarn add -D eslint eslint-config-sznm@^1.1.2

# or (if using pnpm)
pnpm i -D eslint eslint-config-sznm@^1.1.2
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
  extends: [
    'sznm', // or 'sznm/bare'
  ],
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
