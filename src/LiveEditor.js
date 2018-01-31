import React from 'react'
import XRay from 'react-x-ray'
import { ThemeProvider } from 'styled-components'

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
    ${code}
  </ThemeProvider>
`

export default ({
  code,
  theme,
  components,
  Component,
  ...props
}) =>
  <Box my={4}>
    <LiveProvider
      scope={Object.assign({ ThemeProvider, XRay, props }, components)}
      code={code}
      transformCode={newCode => transform(theme, newCode)}
    >
      <Flex
        wrap
        align='center'
        flexDirection={['column', 'row', 'row']}
      >
        <Box p={4} borderWidth={1} borderColor='lightgray'>
          <LivePreview />
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
        </Box>
      </Flex>
    </LiveProvider>
  </Box>
