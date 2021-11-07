# eslint-config-sznm ✨

ESLint rules I use throughout my personal projects with bundled dependencies.

## ❗ Before Installation

> ⚠️❗ [WIP] still tinkering with the configurations, will be frequently changed / updated in the meantime. Some things might fall down / not work properly. Use at your own risk. I made this config with support for Next.js / React + TypeScript as first priority in mind. There might be some rules that you need to disable if your project is a mixed JS/TS or JS only codebase.

[![eslint-config-sznm](https://socialify.git.ci/sozonome/eslint-config-sznm/image?description=1&descriptionEditable=sozonome%27s%20personal%20ESLint%20configs&font=Inter&logo=https%3A%2F%2Feslint.org%2Fassets%2Fimg%2Ffavicon.512x512.png&owner=1&pattern=Solid&stargazers=1&theme=Dark)](https://npmjs.com/package/eslint-config-sznm)

## 🔧 Installation

```bash
npm i --save-dev eslint@^7 eslint-config-sznm

# or (if using yarn)

yarn add -D eslint@^7 eslint-config-sznm
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
