import React from 'react'

import connect from 'refunk'
import pluckExtensions from '@compositor/pluck-extension-tree'

import { ThemeProvider } from 'glamorous'
import { Link } from 'react-router-dom'
import { Div, H4 } from '@compositor/mono'

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import { editorCss } from './constants'

import getProps from './util/get-props'
import Box from './Box'
import Flex from './Flex'
import Style from './Style'

import ComponentExtensions from './ComponentExtensions'
import ComponentExamples from './ComponentExamples'
import ComponentImports from './ComponentImports'
import ExampleProps from './ExampleProps'

const transform = (theme, code) => `
  <ThemeProvider theme={${JSON.stringify(theme)}}>
    <Box>
      ${code}
    </Box>
  </ThemeProvider>
`

const ComponentEditor = ({
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
    <Div my={4}>
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

        <Style>{editorCss}</Style>
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

        <ComponentImports
          component={component}
          components={components}
        />

        <ComponentExtensions
          component={component}
          components={components}
        />

        <ExampleProps
          component={component}
        />
    </Box>
    </Div>
  )
}

export default connect(ComponentEditor)
