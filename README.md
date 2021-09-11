# eslint-config-sznm ✨

ESLint rules I use throughout my personal projects with bundled dependencies.

## ❗ Before Installation

> ⚠️❗ [WIP] still tinkering with the configurations, will be frequently changed / updated in the meantime. Some things might fall down / not work properly. Use at your own risk. I made this config with support for Next.js / React + TypeScript as first priority in mind. There might be some rules that you need to disable if your project is a mixed JS/TS or JS only codebase.

## 🔧 Installation

```bash
npm i --save-dev eslint-config-sznm

# or (if using yarn)

yarn add -D eslint-config-sznm
```

## :computer: Usage

add the extends to your project's eslintrc config
(`.eslintrc.js` or other extensions whichever you use in your project)

### ⚡ Next.js Projects

make sure `eslint-config-next` is installed (as `devDependencies`)

```js
module.exports = {
  extends: ['sznm/react', 'plugin:@next/next/recommended'],
};
```

optional:

```js
module.exports = {
  extends: [
    'sznm/react',
    'plugin:react/jsx-runtime', // to switch off jsx (import React) warning
    'plugin:@next/next/recommended',
  ],
};
```

### ⚛️ React Projects

make sure `eslint-plugin-jsx-a11y` and `eslint-plugin-react` is installed (as `devDependencies`)

```js
module.exports = {
  extends: ['sznm/react'],
};
```

### 🟨 Non React Projects

> ❗⚠️ [WIP] still tinkering around here, I made this config with support for Next.js and React + TypeScript as first priority in mind.

```js
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
