const path = require('path')
const { dev } = require('@compositor/x0')
const webpack = require('webpack')

const dirname = path.join(__dirname, '../dist')
const modes = {
  library: path.join(dirname, 'Library'),
  sandbox: path.join(dirname, 'Sandbox'),
  responsive: path.join(dirname, 'Responsive'),
  xray: path.join(dirname, 'XRay'),
}

module.exports = opts => {
  opts.webpack = {
    plugins: [
      new webpack.DefinePlugin({
        USER_APP: JSON.stringify(opts.app)
      })
    ]
  }

  opts.app = modes[opts.mode] || null

  return dev(opts)
}
