import React from 'react'
import { Library } from '@compositor/kit'
import withUserApp from './withUserApp'

class LibraryMode extends React.Component {
  render() {
    const {
      render,
      routes = [],
      ...props
    } = this.props

    const examples = routes.map(({ name, Component }) => ({
      name,
      element: React.createElement(Component)
    }))

    return (
      <Library {...props} examples={examples} />
    )
  }
}

export default withUserApp(LibraryMode)
