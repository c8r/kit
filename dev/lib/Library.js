import React from 'react'
import { Library } from '@compositor/kit'

class LibraryMode extends React.Component {
  render() {
    const {
      render,
      routes = [],
    } = this.props

    const examples = routes.map(({ name, Component }) => ({
      name,
      element: React.createElement(Component)
    }))

    return (
      <Library examples={examples} />
    )
  }
}

export default LibraryMode
