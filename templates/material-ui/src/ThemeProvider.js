import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

export default props => (
  <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
)
