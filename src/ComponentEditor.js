import React from 'react'
import connect from 'refunk'

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
  Div
} from '@compositor/mono'

const transform = (theme, code) => `
  <ThemeProvider theme={${JSON.stringify(theme)}}>
    <div>
      ${code}
    </div>
  </ThemeProvider>
`

const ComponentEditor = ({
  theme,
  library,
  component,
  editor,
  update
}) => {
  const scope = Object.assign({}, library, {
    ThemeProvider,
    theme
  })

  const code = editor.examples[editor.currentExample]

  return (
    <Div my={4}>
      <LiveProvider
        key={component.name}
        scope={scope}
        code={code}
        transformCode={newCode => transform(theme, newCode)}
      >
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>

      Examples:

      {editor.examples.length > 1 && (
        editor.examples.map((ex, i) =>
          <a
            href='#!'
            children={i}
            onClick={() => update(state => {
              const newState = Object.assign({}, state)

              newState.editors[component.name].currentExample = i

              return newState
            })}
          />
        )
      )}
    </Div>
  )
}

export default connect(ComponentEditor)
