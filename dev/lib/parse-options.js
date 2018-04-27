const fs = require('fs')
const path = require('path')
const find = require('find-up')

const getAbsolutePath = filename => filename
  ? path.isAbsolute(filename)
    ? filename : path.join(process.cwd(), filename)
  : null

module.exports = opts => {
  const filepath = path.isAbsolute(opts.input) ? opts.input : path.join(process.cwd(), opts.input)
  const isDir = fs.statSync(filepath).isDirectory()
  const dirname =  isDir ? filepath : path.dirname(filepath)
  const filename = isDir ? null : filepath

  const config = opts.config 
    ? getAbsolutePath(opts.config)
    : find.sync('kit.config.js', { cwd: dirname })

  const webpack = opts.webpack
    ? getAbsolutePath(opts.webpack)
    : find.sync('webpack.config.js', { cwd: dirname })

  return Object.assign({
    dirname,
    filename,
    config,
    webpack
  }, opts)
}
