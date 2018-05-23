import React from 'react'
import {
  Library,
  // can't currently be controlled
  LiveEditor as Editor
} from '@compositor/kit'

import {
  LiveProvider,
  LiveEditor,
  LivePreview,
  LiveError
} from 'react-live'

export default class Sandbox extends React.Component {
  render () {
    const { render, routes } = this.props
    console.log('Sandbox', routes)

    const sources = routes.map(route => {
      if (route.module.jsx) {
        // currently only works for .jsx files
        // console.log('jsx', route.module.jsx)
        // console.log(Object.keys(route.module), route.module.scope)
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
