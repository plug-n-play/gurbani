const withCSS = require('@zeit/next-css')

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}

module.exports = withCSS({
  cssModules: true
})
