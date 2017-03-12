# babel-plugin-replace-identifiers

[![Greenkeeper badge](https://badges.greenkeeper.io/wssgcg1213/babel-plugin-replace-identifiers.svg)](https://greenkeeper.io/)

replace-identifiers

It replace an **Identifier** to another **Identifier**.

If you want to replace an Identifier to a string literal(LVal), you can see this: [babel-plugin-inline-replace-variables](https://github.com/wssgcg1213/babel-plugin-inline-replace-variables)

## Example

**.babelrc**
```json
{
  "plugins": [
    ["replace-identifiers", {
      "React": "Rx"
    }]
  ]
}
```


**In**

```js
React.createElement('foo', bar, 'React', React);
```

**Out**

```js
Rx.createElement('foo', bar, 'React', Rx);
```

## Installation

```sh
$ npm install babel-plugin-replace-identifiers
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": [["replace-identifiers", {
    "foo": "bar",
    "hello": "world"
  }]]
}
```

### Via CLI

```sh
$ babel --plugins replace-identifiers script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["replace-identifiers"]
});
```
