var path = require('path')

module.exports = {
  name: 'ember-frost-css-core',

  includePaths: [
    path.join(__dirname, 'scss')
  ],

  included: function (app) {
    // Addons - see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app
    }
    this._super.included(app)

    if (app) {
      app.import(path.join('vendor', 'google', 'fonts', 'roboto', 'Roboto-Bold.woff2'), { destDir: 'assets/fonts' })
      app.import(path.join('vendor', 'google', 'fonts', 'roboto', 'Roboto-Light.woff2'), { destDir: 'assets/fonts' })
      app.import(path.join('vendor', 'google', 'fonts', 'roboto', 'Roboto-LightItalic.woff2'), { destDir: 'assets/fonts' })
      app.import(path.join('vendor', 'google', 'fonts', 'roboto', 'Roboto-Medium.woff2'), { destDir: 'assets/fonts' })
      app.import(path.join('vendor', 'google', 'fonts', 'roboto', 'Roboto-Regular.woff2'), { destDir: 'assets/fonts' })
      app.import(path.join('vendor', 'google', 'fonts', 'roboto', 'stylesheet.css'))
    }
  }
}
