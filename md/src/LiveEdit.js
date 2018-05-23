import React from 'react'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError
} from 'react-live'

const transformCode = src => `<React.Fragment>${src}</React.Fragment>`

export default ({
  code,
  scope,
  render
}) => (
  <LiveProvider
    code={code}
    scope={scope}
    mountStylesheet={false}
    transformCode={transformCode}>
    {typeof render === 'function' ? (
      render({ code, scope })
    ) : (
      <React.Fragment>
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </React.Fragment>
    )}
  </LiveProvider>
)
