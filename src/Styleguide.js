import React from 'react'
import dxs from 'dxs'

import {
  ThemeProvider
} from 'glamorous'

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import {
  H1,
  Container
} from '@compositor/mono'

const config = require('@compositor/bold/lab.json')
const theme = require('@compositor/bold/theme.json')

const Components = dxs(config.components, { theme })

export default () =>
  <ThemeProvider theme={theme}>
    <Container>
      <H1 children='hi' />

      {Object.keys(Components).map(c =>
        <LiveProvider scope={Object.assign({}, Components, { theme })} code='<strong>h</strong>'>
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      )}
    </Container>
  </ThemeProvider>
