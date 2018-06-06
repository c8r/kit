const path = require('path')
const { dev } = require('@compositor/x0')
const webpack = require('webpack')

const dirname = path.join(__dirname, '../src')
const modes = {
  library: path.join(dirname, 'Library'),
  sandbox: path.join(dirname, 'Sandbox'),
  responsive: path.join(dirname, 'Responsive'),
  xray: path.join(dirname, 'XRay'),
}

module.exports = opts => {
  opts.webpack = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: path.resolve(__dirname, '../node_modules'),
          include: path.resolve(__dirname),
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              'babel-preset-env',
              'babel-preset-stage-0',
              'babel-preset-react',
            ].map(require.resolve),
            plugins: [
              'babel-plugin-macros',
              'babel-plugin-transform-runtime'
            ].map(require.resolve)
          }
        }
      ],
    },
    resolve: {
      alias: {
        'webpack-hot-client/client': path.join(__dirname, '../node_modules/webpack-hot-client/client')
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        USER_APP: JSON.stringify(opts.app)
      })
    ]
  }
  opts.title = 'Kit'
  opts.app = modes[opts.mode] || null

  return dev(opts)
}
