import React from 'react'
import { Library } from '@compositor/kit'
import DefaultProvider from './Provider'

class LibraryMode extends React.Component {
  state = this.props

  render() {
    const {
      render,
      routes = [],
    } = this.state

    const examples = routes.map(({ name, Component }) => ({
      name,
      element: React.createElement(Component)
    }))

    console.log('Library', examples)

    return (
      <Provider {...this.state}>
        <Library examples={examples} />
      </Provider>
    )
  }
}

export default LibraryMode
