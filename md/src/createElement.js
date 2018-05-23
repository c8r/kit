import remark from 'remark'
import remarkSlug from 'remark-slug'
import remarkReact from 'remark-react'
import unist from 'unist-builder'
import detab from 'detab'
import defaultScope from './defaultScope'

const codeHandler = (h, node, parent) => {
  const props = {
    lang: node.lang
  }

  const value = node.value ? detab(node.value + '\n') : ''
  return h(node.position, 'pre', props, [unist('text', value)])
}

module.exports = ({
  src,
  scope,
}) => {
  const opts = {
    // pass components to remark-react for rendering
    remarkReactComponents: {
      ...defaultScope,
      ...scope
    },
    toHast: {
      handlers: {
        code: codeHandler
      }
    }
  }

  const element = remark()
    .use(remarkSlug)
    .use(remarkReact, opts)
    .processSync(src).contents

  return element
}
