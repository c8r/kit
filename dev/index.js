const path = require('path')
const { dev } = require('@compositor/x0')
const webpack = require('webpack')

const modes = {
  library: path.join(__dirname, 'lib/Library'),
  sandbox: path.join(__dirname, 'lib/Sandbox'),
  responsive: path.join(__dirname, 'lib/Responsive'),
  xray: path.join(__dirname, 'lib/XRay'),
}

module.exports = opts => {
  if (opts.app) {
    opts.webpack = {
      plugins: [
        new webpack.DefinePlugin({
          USER_APP: JSON.stringify(opts.app)
        })
      ]
    }
  }
  opts.app = modes[opts.mode] || null
  return dev(opts)
}
