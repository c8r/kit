import React from 'react'
import { renderToString } from 'react-dom/server'

import { ThemeProvider } from 'glamorous'
import { renderStatic } from 'glamor/server'
import { Div } from '@compositor/mono'

import * as library from '../library'
import Styleguide from './Styleguide'
import Style from './Style'

const config = require('@compositor/bold/lab.json')
const theme = require('@compositor/bold/theme.json')
const components = config.components

const initialState = {
  components,
  config,
  theme,
  editors: components.reduce((acc, c) =>
   Object.assign({}, acc, {
      [c.name]: {
        examples: c.examples || [`<${c.name} />`],
        currentExample: 0
      }
    })
  , {}),
  sideNav: {
    currSection: null,
    currPage: null // TODO: wire up with router
  }
}

const App = ({ css, ...props }) =>
  <ThemeProvider theme={theme}>
    <Div
      style={{
        fontFamily: theme.fonts[0] || 'sans-serif'
      }}
    >
      {css && (
        <Style>{css}</Style>
      )}

      <Styleguide
        {...props}
        library={library}
      />
    </Div>
  </ThemeProvider>

App.getInitialProps = ({ Component }) => {
  const el = React.createElement(Component, initialState)
  const { css } = renderStatic(() => renderToString(el))

  return Object.assign({}, initialState, { css })
}

export default App
