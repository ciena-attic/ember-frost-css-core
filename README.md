[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-css-core.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-css-core
[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-css-core.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-css-core
[npm-img]: https://img.shields.io/npm/v/ember-frost-css-core.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-css-core

# ember-frost-css-core
SASS based normalization, convenience classes and variables for Frost projects

# usage

`ember install ember-frost-css-core`

Modify your ember-cli-build.js to include 

```
var frostCssCore = require('frostCssCore');

var app = new EmberAddon(defaults, {
    sassOptions: {
      includePaths: [
        frostCssCore.includePaths
      ]
    }
  });
```

Modify your app.scss to include (TODO)

```
@import 'frost-core';
```

You now have access to the theme variables

e.g.

`$frost-font-size-xl`

# contribution

TODO