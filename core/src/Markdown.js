import React from 'react'
import { transform } from 'buble'
import mdx from '@mdx-js/mdx'
import { MDXTag } from '@mdx-js/tag'
import { ThemeProvider } from 'styled-components'

export default ({ children, components, theme = {} }) => {
  const jsx = mdx.sync(children).replace('export default ({components}) =>', '')

  const { code } = transform(`
    <ThemeProvider theme={theme}>
      <React.Fragment>
        ${jsx}
      </React.Fragment>
    </ThemeProvider>
  `)

  const scope = { ThemeProvider, MDXTag, ...components, components, theme }
  const keys = Object.keys(scope)
  const values = keys.map(k => scope[k])

  const fn = new Function('React', ...keys, `return (${code})`)

  return fn(React, ...values)
}
