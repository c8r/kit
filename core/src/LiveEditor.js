import React, { Component } from 'react'
import PropTypes from 'prop-types'
import matter from 'gray-matter'
import { ThemeProvider } from 'styled-components'
import nano from 'nano-style'

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import Catch from './Catch'
import { Box } from './ui'

const Editor = nano(LiveEditor)({
  fontFamily: 'Menlo, monospace',
  fontSize: '14px',
  padding: '8px',
  backgroundColor: '#f6f6f6',
  outline: 'none'
})

class KitEditor extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    scope: PropTypes.object,
    theme: PropTypes.object
  }

  render() {
    const { code, scope, theme = {} } = this.props
    const { content, data = {} } = matter(code)

    return (
      <Catch>
        <LiveProvider
          mountStylesheet={false}
          scope={{
            ThemeProvider,
            theme,
            ...scope
          }}
          code={content}
          transformCode={code => `
            <ThemeProvider theme={theme}>
              <div>${code}</div>
            </ThemeProvider>
          `}
        >
          <Box>
            <LivePreview />
            <Box mt={2}>
              <Editor />
            </Box>
            <Box w={1}>
              <LiveError
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '.5rem',
                  height: 'auto'
                }}
              />
            </Box>
          </Box>
        </LiveProvider>
      </Catch>
    )
  }
}

export default KitEditor
