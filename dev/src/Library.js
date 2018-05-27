import React from 'react'
import { Library } from '@compositor/kit'

console.log(typeof USER_APP === 'string' && USER_APP)

// todo require USER_APP
const App = USER_APP ? require(USER_APP).default : props => props.render()

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
      <App
        render={() => (
          <Library examples={examples} />
        )}
      />
    )
  }
}

export default LibraryMode
