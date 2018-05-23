const path = require('path')
const { dev } = require('@compositor/x0')

const modes = {
  library: path.join(__dirname, 'lib/Library')
}

module.exports = opts => {
  console.log('mode:', opts.mode || 'default')
  opts.app = modes[opts.mode]

  return dev(opts)
    .then(res => {
      console.log('DEV server')
    })
}
