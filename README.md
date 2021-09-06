# eslint-config-sznm ✨

> [WIP] My personal ESLint rules.

## Installation

```bash
npm i --save-dev eslint-config-sznm

# or (if using yarn)

yarn add -D eslint-config-sznm
```

## Usage

### Next.js Projects

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
    'plugin:react/jsx-runtime', // to switch off jsx warning 
    'plugin:@next/next/recommended',
  ],
};
```

### React Projects

```js
module.exports = {
  extends: ['eslint-config-sznm/react'],
};
```

### Non React Projects

```js
module.exports = {
  extends: ['eslint-config-sznm'],
};
```
