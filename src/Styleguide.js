import React from 'react'

import {
  ThemeProvider
} from 'glamorous'

import dxs from 'dxs'

import {
  H1,
  Container
} from '@compositor/mono'

const config = require('@compositor/bold/lab.json')
const theme = require('@compositor/bold/theme.json')

const Components = dxs(config.components, { theme })
console.log(Components)
const Component = Components.Button

export default () =>
  <ThemeProvider theme={theme}>
    <Container>
      <H1 children='hi' />
      <Components.Button
        theme={theme}
        children='yo'
      />
    </Container>
  </ThemeProvider>
