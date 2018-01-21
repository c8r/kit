import React from 'react'

import { ThemeProvider } from 'glamorous'

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import Box from './Box'
import Flex from './Flex'
import Style from './Style'

const transform = (theme, code) => `
  <ThemeProvider theme={${JSON.stringify(theme)}}>
    <Box>
      ${code}
    </Box>
  </ThemeProvider>
`

export default ({
  code,
  theme,
  scope,
  Component
}) =>
  <Box my={4}>
    <LiveProvider
      scope={scope}
      code={code}
      transformCode={newCode => transform(theme, newCode)}
    >
      <Flex
        wrap
        align='center'
        flexDirection={['column', 'row', 'row']}
      >
        <Box p={4}>
          <LivePreview />
        </Box>
        <LiveEditor
          style={{
            width: '100%',
            padding: '32px'
          }}
        />
        <Box w={1}>
          <LiveError
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: '.5rem',
              height: 'auto'
            }}
          />
        </Box>
      </Flex>
    </LiveProvider>
  </Box>
