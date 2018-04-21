const fs = require('fs')
const path = require('path')
const find = require('find-up')

const getAbsolutePath = filename => filename
  ? path.isAbsolute(filename)
    ? filename : path.join(process.cwd(), filename)
  : null

module.exports = opts => {
  const filepath = path.isAbsolute(opts.input) ? opts.input : path.join(process.cwd(), opts.input)
  const stats = fs.statSync(filepath)

  opts.dirname = stats.isDirectory() ? filepath : path.dirname(filepath)
  opts.filename = stats.isDirectory() ? null : filepath

  if (!opts.config) {
    opts.config = find.sync('kit.config.js', { cwd: opts.dirname })
  }
  opts.config = getAbsolutePath(opts.config)

  if (!opts.webpack) {
    opts.webpack = find.sync('webpack.config.js', { cwd: opts.dirname })
  }
  opts.webpack = getAbsolutePath(opts.webpack)

  return opts
}
