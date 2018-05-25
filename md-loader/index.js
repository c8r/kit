const { getOptions } = require('loader-utils')
const matter = require('gray-matter')
const stringifyObject = require('stringify-object')

module.exports = async function (src) {
  const callback = this.async()
  const opts = getOptions(this)

  // maybe handle front-matter in component...
  const { content, data } = matter(src)

  const escaped = content
    .replace(/\`/g, '\\`')
    .replace(/\$/g, '\\$')

  const code = `
    import React from 'react'
    import { Markdown, createElement, CodeBlock } from '@compositor/md'

    const src = \`${escaped}\`

    const Component = props => (
      <Markdown
        {...props}
        src={src}
      />
    )

    Component.defaultProps = ${stringifyObject(data)}

    export const getExamples = props => {
      const root = createElement({ ...props, src })
      const examples = React.Children.toArray(root.props.children)
        .filter(child => child.type === CodeBlock)
      return examples
    }

    export default Component
  `

  return callback(null, code)
}
