import React from 'react'
import connect from 'refunk'

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

import ComponentExamples from './ComponentExamples'

const transform = (theme, code) => `
  <ThemeProvider theme={${JSON.stringify(theme)}}>
    <Box>
      ${code}
    </Box>
  </ThemeProvider>
`

const Editor = ({
  sgTheme,
  theme,
  library,
  component,
  components,
  editor,
  update
}) => {
  const scope = Object.assign({}, { Flex, Box }, library, {
    ThemeProvider,
    theme
  })

  const code = editor.currentExample === 'all'
    ? editor.examples.join("\n\n")
    : editor.examples[editor.currentExample]

  return (
    <Box my={4}>
      <LiveProvider
        key={component.name}
        scope={scope}
        code={code}
        transformCode={newCode => transform(theme, newCode)}
      >
        <Flex
          wrap
          flexDirection={['column', 'row', 'row']}
          style={{ alignItems: 'center' }}
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
                backgroundColor: sgTheme.colors.red,
                color: 'white',
                padding: '.5rem',
                height: 'auto'
              }}
            />
          </Box>
        </Flex>
      </LiveProvider>

      <Box
        px={4}
        pt={4}
        borderWidth={1}
        borderTop
        borderColor={sgTheme.colors.gray1}
      >
        <ComponentExamples
          examples={editor.examples}
          currentExample={editor.currentExample}
          onSelect={ex => update(state => {
            const newState = Object.assign({}, state)

            newState.editors[component.name].currentExample = ex

            return newState
          })}
        />
      </Box>
    </Box>
  )
}

export default connect(Editor)
