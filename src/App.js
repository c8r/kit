import React from 'react'

import {
  ThemeProvider
} from 'glamorous'

import {
  Div
} from '@compositor/mono'

import Styleguide from './Styleguide'

const config = require('@compositor/bold/lab.json')
const theme = require('@compositor/bold/theme.json')
const components = config.components

import * as library from '../library'

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
  , {})
}

const App = props =>
  <ThemeProvider theme={theme}>
    <Div
      style={{
        fontFamily: theme.fonts[0] || 'sans-serif'
      }}
    >
      <Styleguide
        {...props}
        library={library}
      />
    </Div>
  </ThemeProvider>

App.getInitialProps = () => initialState

export default App
