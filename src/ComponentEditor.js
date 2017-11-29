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
import ComponentExamples from './ComponentExamples'

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

      {component.imports && (
        <Div>
          <H4 fontSize={1} mb={2}>Imports</H4>
          {component.imports.map(comp =>
            <Link
              style={{
                textDecoration: 'none',
                color: 'black'
              }}
              to={`/components/${comp.toLowerCase()}`}
            >
              <code
                key={comp}
                children={comp}
                style={{ display: 'block', lineHeight: 1.5 }}
              />
            </Link>
          )}
        </Div>
      )}

      <Div>
        <H4 fontSize={1} mb={2}>Imported by</H4>
        {components.filter(c => c.imports && c.imports.includes(component.name)).map(comp =>
          <Link
            style={{
              textDecoration: 'none',
              color: 'black'
            }}
            to={`/components/${comp.name.toLowerCase()}`}
          >
            <code
              key={comp.name}
              children={comp.name}
              style={{ display: 'block', lineHeight: 1.5 }}
            />
          </Link>
        )}
      </Div>

      <H4 fontSize={1} mb={2}>Extended from</H4>
      {pluckExtensions(component.name, components).map(ext =>
        <Link
          style={{
            textDecoration: 'none',
            color: 'black'
          }}
          to={`/components/${ext.name.toLowerCase()}`}
        >
          <code
            key={ext.name}
            children={ext.name}
            style={{ display: 'block', lineHeight: 1.5 }}
          />
        </Link>
      )}

      <H4 fontSize={1} mb={2}>Extended by</H4>
      {pluckExtensions(component.name, components, { descendents: true }).map(ext =>
        <Link
          style={{
            textDecoration: 'none',
            color: 'black'
          }}
          to={`/components/${ext.name.toLowerCase()}`}
        >
          <code
            key={ext.name}
            children={ext.name}
            style={{ display: 'block', lineHeight: 1.5 }}
          />
        </Link>
      )}
      <H4 fontSize={1}>Props</H4>
      <table style={{ cellspacing: 0, borderCollapse: 'collapse'}}>
        <thead style={{ textAlign: 'left' }}>
          <tr style={{fontSize: '12px', textTransform: 'uppercase' }}>
            <th>Prop</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody
          children={Object.keys(component.props || {}).map(prop =>
            <tr key={prop}>
              <td style={{ paddingRight: '32px'}}><code>{prop}</code></td>
              <td><code>{JSON.stringify(component.props[prop])}</code></td>
            </tr>
          )}
        />
      </table>
      <H4 fontSize={1}>Example Props</H4>
      <table>
        <thead>
          <tr style={{fontSize: '12px', textTransform: 'uppercase', textAlign: 'left' }}>
            <th>Prop</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody
          children={getProps(component.examples).map(prop =>
            <tr key={`${prop.prop}-${prop.value}`}>
              <td style={{ paddingRight: '32px' }}><code>{prop.prop}</code></td>
              <td><code>{prop.value}</code></td>
            </tr>
          )}
        />
      </table>
    </Box>
    </Div>
  )
}

export default connect(ComponentEditor)
