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

const transform = (theme, code) => `
  <ThemeProvider theme={${JSON.stringify(theme)}}>
    <Box>
      ${code}
    </Box>
  </ThemeProvider>
`

const ComponentEditor = ({
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
          <Box
            px={4}
            py={5}
            w={[1]}
          >
            <LivePreview />
          </Box>
          <Box
            p={4}
            w={[1]}
          >
            <LiveEditor />
          </Box>
          <Box w={1}>
            <LiveError
              style={{
                backgroundColor: theme.colors.red,
                color: 'white',
                padding: '.5rem',
                height: 'auto'
              }}
            />
          </Box>
        </Flex>

        <Style>{editorCss}</Style>
      </LiveProvider>

      <Box px={4} pt={4} style={{ borderTop: '1px solid #eee' }}>
        <H4 fontSize={1} mt={0}>Examples</H4>

      {editor.examples.length > 1 && (
        <Div>
          <a
            href='#!'
            children='All'
            style={{ fontSize: 12, textDecoration: 'none', outline: '1px solid black', display: 'inline-block', marginRight: '16px', color: 'black', padding: '4px 16px'  }}
            onClick={() => update(state => {
              const newState = Object.assign({}, state)

              newState.editors[component.name].currentExample = 'all'

              return newState
            })}
          />

          {editor.examples.map((ex, i) =>
            <a
              key={i}
              href='#!'
              children={i}
              style={{ fontSize: 12, textDecoration: 'none', outline: '1px solid black', display: 'inline-block', marginRight: '16px', color: 'black', padding: '4px 16px'  }}
              onClick={() => update(state => {
                const newState = Object.assign({}, state)

                newState.editors[component.name].currentExample = i

                return newState
              })}
            />
          )}
        </Div>
      )}

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
