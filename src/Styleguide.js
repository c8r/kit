import React from 'react'
import connect from 'refunk'

import {
  ThemeProvider
} from 'glamorous'

import {
  H1,
  Div,
  Container
} from '@compositor/mono'

import * as library from '../library'

import ComponentEditor from './ComponentEditor'

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
  , {})
}

const Styleguide = ({
  components,
  editors,
  config,
  theme
}) =>
  <ThemeProvider theme={theme}>
    <Container>
      <H1 children='Components' />

      {components.map(c =>
        <ComponentEditor
          key={c.name}
          theme={theme}
          component={c}
          library={library}
          editor={editors[c.name]}
        />
      )}
    </Container>
  </ThemeProvider>

Styleguide.getInitialProps = () => initialState

export default connect(Styleguide)
