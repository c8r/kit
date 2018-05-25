import React from 'react'
import {
  Library,
  // can't currently be controlled
  // use this after core update
  // LiveEditor as Editor
} from '@compositor/kit'

import {
  LiveProvider,
  LiveEditor,
  LivePreview,
  LiveError
} from 'react-live'

// experimental
// currently only works for jsx files
export default class Sandbox extends React.Component {
  render () {
    const { render, routes } = this.props

    const sources = routes.map(route => {
      if (route.module.jsx) {
        return {
          name: route.name,
          code: route.module.jsx,
          scope: Object.assign({}, route.module.scope, {
            props: route.Component.defaultProps || {}
          })
        }
      }
    })
      .filter(source => !!source)
      .map(({ name, code, scope }) => ({
        name,
        element: (
          <LiveProvider
            code={code}
            scope={scope}
            mountStylesheet={false}>
            <LivePreview />
            <LiveEditor />
            <LiveError />
          </LiveProvider>
        )
      }))

    return (
      <Library
        title='Sandbox'
        examples={sources}
      />
    )
  }
}
