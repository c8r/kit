import React, { Component } from 'react'
import PropTypes from 'prop-types'
import matter from 'gray-matter'
import { ThemeProvider } from 'styled-components'

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import Provider from './Provider'
import Catch from './Catch'
import { Box } from './ui'
import { CHANNEL, contextTypes } from './constants'

class Editor extends Component {
  static contextTypes = contextTypes

  static propTypes = {
    code: PropTypes.string.isRequired
  }

  constructor(props, context) {
    super()

    const { code } = props
    const { scope, theme = {} } = context[CHANNEL]

    const { content, data = {} } = matter(code)

    this.state = {
      scope: Object.assign({ ThemeProvider, theme }, scope),
      code: content,
      config: data
    }
  }

  render() {
    return (
      <Catch>
        <LiveProvider
          mountStylesheet={false}
          scope={this.state.scope}
          code={this.state.code}
          transformCode={code => `
            <ThemeProvider theme={theme}>
              ${code}
            </ThemeProvider>
          `}
        >
          <Box>
            <LivePreview />
            <LiveEditor />
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

export default Editor
