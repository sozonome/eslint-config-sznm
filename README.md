# eslint-config-sznm ✨

ESLint rules I use throughout my personal projects with bundled dependencies.

## ❗ Before Installation

> ⚠️❗ [WIP] still tinkering with the configurations, will be frequently changed / updated in the meantime. Some things might fall down / not work properly. Use at your own risk.

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
  extends: ['eslint-config-sznm/react', 'plugin:@next/next/recommended'],
};
```

optional:

```js
module.exports = {
  extends: [
    'eslint-config-sznm/react',
    'plugin:react/jsx-runtime', // to switch off jsx (import React) warning
    'plugin:@next/next/recommended',
  ],
};
```

### ⚛️ React Projects

make sure `eslint-plugin-jsx-a11y` and `eslint-plugin-react` is installed (as `devDependencies`)

```js
module.exports = {
  extends: ['eslint-config-sznm/react'],
};
```

### 🟨 Non React Projects

> ❗⚠️ [WIP] still tinkering around here, I made this config with support for Next.js and React as first priority in mind.

```js
module.exports = {
  extends: ['eslint-config-sznm'],
};
```

## 📣 Suggestions

feel free to give feedbacks or suggestions or start a discussion in [Github discussions](https://github.com/sozonome/eslint-config-sznm/discussions) of the repo.
