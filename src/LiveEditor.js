import React, { Component } from 'react'
import PropTypes from 'prop-types'
import matter from 'gray-matter'

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import Catch from './Catch'
import Box from './Box'

class Editor extends Component {
  constructor (props) {
    super()

    const {
      code,
      theme,
      components,
      scope
    } = props

    const { content, data = {} } = matter(code)

    const defaultScope = {
      props,
      theme
    }

    const fullScope = Object.assign(defaultScope, components, scope)

    this.state = {
      fullScope,
      rawCode: content,
      options: data,
      viewport: data.viewport
    }
  }

  render () {
    const {
      rawCode,
      options,
      fullScope,
      viewport
    } = this.state

    return (
      <Catch>
        <LiveProvider
          mountStylesheet={false}
          scope={fullScope}
          code={rawCode}>
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

Editor.defaultProps = {
  theme: {},
  scope: {}
}

Editor.propTypes = {
  /**
   * JSX code to be embedded in the editor and rendered
   */
  code: PropTypes.string.isRequired,
  /**
   * Theme config object that is used in ThemeProvider transform
   */
  theme: PropTypes.object,
  /**
   * Components available to the editor
   */
  scope: PropTypes.object
}

export default Editor
