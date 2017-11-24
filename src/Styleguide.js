import React from 'react'

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
  Div,
  Container
} from '@compositor/mono'

import * as library from '../library'

const config = require('@compositor/bold/lab.json')
const theme = require('@compositor/bold/theme.json')

export default () =>
  <ThemeProvider theme={theme}>
    <Container>
      <H1 children='Components' />

      {config.components.map(c =>
        <Div my={4}>
          <LiveProvider
            key={c}
            scope={Object.assign({}, library, { ThemeProvider, theme })}
            code={c.examples[0] || `<${c.name} />`}
            transformCode={code => `
              <ThemeProvider theme={${JSON.stringify(theme)}}>
                <div>
                  ${code}
                </div>
              </ThemeProvider>
            `}
          >
            <LiveEditor />
            <LiveError />
            <LivePreview />
          </LiveProvider>
        </Div>
      )}
    </Container>
  </ThemeProvider>
