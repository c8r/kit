const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const serve = require('webpack-serve')
const history = require('connect-history-api-fallback')
const convert = require('koa-connect')

const getConfig = require('./config')

const dev = {
  hot: true,
  overlay: true,
  logLevel: 'error',
  clientLogLevel: 'none',
  stats: 'errors-only',
}

const start = async (opts = {}) => {
  const { port = 8000 } = opts

  if (opts.config) {
    opts._config = require(opts.config)
  }

  const config = getConfig(opts)

  const serveOptions = {
    config,
    dev,
    logLevel: 'error',
    port: opts.port,
    hot: {
      logLevel: 'error'
    },
    add: (app, middleware, options) => {
      app.use(convert(history({})))
    }
  }

  return new Promise((resolve, reject) => {
    serve(serveOptions)
      .then(server => {
        server.compiler.plugin('done', () => {
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
