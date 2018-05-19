import React from 'react'
import { Library, Example } from '@compositor/kit'
import { Button } from 'standard-components'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import Docs from './readme.md'

export default () =>
  <ThemeProvider theme={theme}
