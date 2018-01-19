import React from 'react'
import fs from 'fs'

import { renderToString } from 'react-dom/server'
import { ThemeProvider } from 'glamorous'
import { renderStatic } from 'glamor/server'

import * as Components from '../library'
import theme from '../library/theme.json'
import Styleguide from './Styleguide'
import Style from './Style'

console.log(Components)

import sgTheme from '@compositor/mono/theme.json'

const initialState = {
  sgTheme,
  Components,
  theme
}

const App = ({ css, ...props }) =>
  <ThemeProvider theme={theme}>
    <div
      style={{
        fontFamily: theme.fonts[0] || 'sans-serif'
      }}
    >
      <Style>{css}</Style>

      <Styleguide
        {...props}
        library={library}
      />
    </div>
  </ThemeProvider>

App.getInitialProps = ({ Component }) => {
  const el = React.createElement(Component, initialState)
  const { css } = renderStatic(() => renderToString(el))

  const Button = fs.readFileSync('docs/Button.md', 'utf8')
  return Object.assign({}, initialState, {
    css,
    md: {
      Button
    }
  })
}

export default App
