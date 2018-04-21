const matter = require('gray-matter')
const stringifyObject = require('stringify-object')

module.exports = async function(src) {
  const callback = this.async()

  const { content, data } = matter(src)

  const code = `
  import React from 'react'

  const Component = props =>
    <React.Fragment>
      ${content}
    </React.Fragment>

  Component.defaultProps = ${stringifyObject(data)}

  export default Component
  `

  return callback(null, code)
}
