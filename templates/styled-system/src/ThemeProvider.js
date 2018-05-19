import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

export default props => (
  <ThemeProvider
    {...props}
    theme={theme}
  />
)
