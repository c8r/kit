const { getOptions } = require('loader-utils')
const buble = require('buble')
const matter = require('gray-matter')
const stringifyObject = require('stringify-object')

module.exports = async function(src) {
  const callback = this.async()
  const opts = getOptions(this)

  const { content, data } = matter(src)

  const parsed = buble.transform(content).code

  const scope = opts.config ? `
  import config from '${opts.config}'
  const scope = config.components || {}
  ` : 'const scope = {}'

  const code = `
  import React from 'react'
  ${scope}

  const keys = Object.keys(scope)
  const values = keys.map(key => scope[key])
  const Component = new Function(
    'React',
    ...keys,
    \`return props =>
      React.createElement(React.Fragment, null,
        ${parsed}
      )
    \`
  )(React, ...values)

  export const jsx = \`
    ${content}
  \`

  Component.defaultProps = ${stringifyObject(data)}

  export default Component
  `

  return callback(null, code)
}
