[ci-img]: https://travis-ci.org/ciena-frost/ember-frost-css-core.svg "Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-css-core

[cov-img]: https://coveralls.io/repos/github/ciena-frost/ember-frost-css-core/badge.svg?branch=master "Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-css-core

[npm-img]: https://img.shields.io/npm/v/ember-frost-css-core.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-css-core

# ember-frost-css-core <br /> [![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]
SASS based normalization, convenience classes and variables for Frost projects

# Usage 

```
ember install ember-frost-css-core
```

Modify your `ember-cli-build.js` to include:


```javascript
const app = new EmberAddon(defaults, {
    sassOptions: {
      includePaths: [
        'node_modules/ember-frost-css-core/scss'
      ]
    }
  })
```

Modify your `app.scss` to include (TODO)

```sass
@import 'frost-core';
```

You now have access to the theme variables

e.g.

`$frost-z-index-modal`

# Contribution

TODO
