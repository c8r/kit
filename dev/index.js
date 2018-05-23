const path = require('path')
const { dev } = require('@compositor/x0')

const modes = {
  library: path.join(__dirname, 'lib/Library'),
  sandbox: path.join(__dirname, 'lib/Sandbox'),
  responsive: path.join(__dirname, 'lib/Responsive'),
  xray: path.join(__dirname, 'lib/XRay'),
}

module.exports = opts => {
  console.log('DEBUG mode:', opts.mode || 'default')
  opts.app = modes[opts.mode]

  return dev(opts)
}
