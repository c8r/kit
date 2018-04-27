const webpack = require('webpack')
const serve = require('webpack-serve')
const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

const parseOptions = require('./parse-options')
const getConfig = require('./config')

const dev = {
  hot: true,
  logLevel: 'error',
  clientLogLevel: 'none',
  stats: 'errors-only'
}

const start = async (opts = {}) => {
  opts = parseOptions(opts)

  if (opts.config) {
    opts._config = require(opts.config)
  }

  const config = getConfig(opts)

  const serveOptions = {
    config,
    dev,
    logLevel: 'error',
    port: opts.port,
    hot: { logLevel: 'error' },
    add: (app, middleware, options) => {
      app.use(convert(history({})))
    }
  }

  return new Promise((resolve, reject) => {
    serve(serveOptions)
      .then(server => {
        server.compiler.hooks.done.tap({ name: 'Kit' }, () => {
          resolve(server)
        })
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

module.exports = start
