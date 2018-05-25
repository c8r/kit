/*
 * parses meow cli object
 *
 * kit dirname          (dev)
 * kit init             (init)
 * kit dev dirname      (dev)
 * kit build dirname    (build)
 * kit publish dirname  (publish)
 */

const fs = require('fs')
const path = require('path')

module.exports = args => {
  const [ a, b ] = args

  if (!a && !b) {
    return {
      cmd: 'init',
      input: path.resolve('.')
    }
  }

  if (!b) {
    return {
      cmd: 'dev',
      input: path.resolve(a)
    }
  }

  const cmd = a
  const input = path.resolve(b)
  return {
    cmd,
    input
  }
}
