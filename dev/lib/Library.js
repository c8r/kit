import React from 'react'
import { Library } from '@compositor/kit'
import DefaultProvider from './Provider'

class LibraryApp extends React.Component {
  state = this.props

  render () {
    const { routes = [], components, theme } = this.state

    const examples = routes.map(({ name, component }) => ({
      name,
      element: React.createElement(component)
    }))

    const Provider = this.props.Provider || DefaultProvider

    return (
      <Provider>
        <Library
          examples={examples}
        />
      </Provider>
    )
  }
}

export default LibraryApp
