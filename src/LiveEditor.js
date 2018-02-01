import React, { Component } from 'react'
import PropTypes from 'prop-types'
import XRay from 'react-x-ray'
import matter from 'gray-matter'
import { ThemeProvider } from 'styled-components'

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import Box from './Box'
import Flex from './Flex'
import Style from './Style'
import { ButtonReset } from '../library'

class Editor extends Component {
  constructor (props) {
    super()

    console.log(props)

    const {
      code,
      theme,
      components,
      scope
    } = props

    const { content, data = {} } = matter(code)

    const defaultScope = {
      ThemeProvider,
      XRay,
      props,
      theme
    }

    const fullScope = Object.assign(defaultScope, components, scope)

    this.state = {
      fullScope,
      rawCode: content,
      options: data,
      xray: false,
      viewport: data.viewport
    }
  }

  /**
   * Turn an optional codemod, like xray, on/off
   */
  toggle = attr => {
    this.setState({ [attr]: !this.state[attr] })
  }

  /**
   * Wrap code in a theme provider and any other components based
   * on frontmatter
   */
  transform = code => ([
    this.state.xray ? '<XRay>' : '',
    `<ThemeProvider theme={${JSON.stringify(this.props.theme)}}>${code}</ThemeProvider>`,
    this.state.xray ? '</XRay>' : ''
  ].join(' '))

  render () {
    const {
      rawCode,
      options,
      fullScope,
      xray,
      viewport
    } = this.state

    return (
      <Box my={4}>
        <Flex flexDirection='row-reverse'>
          {options.xray && (
            <ButtonReset onClick={() => this.toggle('xray')}>
              <img src='https://icon.now.sh/grid' alt='Toggle X Ray' />
            </ButtonReset>
          )}
        </Flex>

        <LiveProvider
          scope={fullScope}
          code={rawCode}
          transformCode={newCode => this.transform(newCode)}
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
      </Box>
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
