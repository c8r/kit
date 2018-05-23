import React from 'react'
import { Library, LiveEditor } from '@compositor/kit'

export default class Sandbox extends React.Component {
  render () {
    const { render, routes } = this.props

    const sources = routes.map(route => {
      if (route.module.jsx) {
        // currently only works for .jsx files
        console.log('jsx', route.module.jsx)
        return {
          name: route.name,
          code: route.module.jsx,
          scope: route.module.scope || {}
        }
      }
    })
      .filter(source => !!source)
      .map(({ name, code, scope }) => ({
        name,
        element: (
          <LiveEditor
            code={code}
            scope={scope}
          />
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
