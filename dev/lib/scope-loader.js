const { getOptions } = require('loader-utils')

module.exports = async function(src) {
  const callback = this.async()
  const options = getOptions(this)

  const components = options.components && options.config
    ? [
      `import { components } from '${options.config}'`,
      `const { ${Object.keys(options.components).join(', ')} } = components` 
    ].join('\n')
    : ''

  const code = [ components, src ].join('\n')

  return callback(null, code)
}
