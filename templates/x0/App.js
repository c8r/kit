import React from 'react'
import { Library, Example } from '@compositor/kit'
import { Button } from 'standard-components'
import { ThemeProvider } from 'styled-components'

import theme from './theme'

export default () =>
  <ThemeProvider theme={theme}>
    <Library>
      <Library.Nav />
      <Example name="Button">
        <Button bg="gray9">Hello, world!</Button>
      </Example>
    </Library>
  </ThemeProvider>
