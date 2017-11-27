import React, { Component } from 'react'

import remark from 'remark'
import remarkReact from 'remark-react'

const dict = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  Text: 'p',
  Link: 'a',
  Image: 'img',
  Blockquote: 'blockquote',
  Pre: 'pre',
  Code: 'code',
  List: 'ul'
}

const mapScope = scope => Object.keys(scope)
  .filter(key => dict[key])
  .map(key => ({ [dict[key]]: scope[key] }))
  .reduce((a, b) => Object.assign(a, b), {})

export default class Markdown extends Component {
  constructor () {
    super()

    this.getElement = (props) => {
      const {
        children,
        scope = {}
      } = props

      const text = React.Children.toArray(children)
        .filter(child => typeof child === 'string')
        .join('\n\n')

      const opts = {
        remarkReactComponents: mapScope(scope)
      }

      const el = remark()
        .use(remarkReact, opts)
        .processSync(text)
        .contents

      return el
    }
  }

  render () {
    const el = this.getElement(this.props)

    return (
      <div
        {...this.props}
        children={el}
      />
    )
  }
}
