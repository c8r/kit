import React, { Component } from 'react'
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

const transform = (theme, code, options = {}) => ([
  options.xray ? '<XRay>' : '',
  `<ThemeProvider theme={${JSON.stringify(theme)}}>${code}</ThemeProvider>`,
  options.xray ? '</XRay>' : ''
].join(' '))

export default class Editor extends Component {
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

  toggle = attr => {
    this.setState({ [attr]: !this.state[attr] })
  }

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
        {options.xray && (
          <ButtonReset onClick={() => this.toggle('xray')}>
            <img src='https://icon.now.sh/grid' alt='Toggle X Ray' />
          </ButtonReset>
        )}

        <LiveProvider
          scope={fullScope}
          code={rawCode}
          transformCode={newCode => transform(fullScope.theme, newCode, this.state)}
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
