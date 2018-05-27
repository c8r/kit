import React from 'react'

const App = USER_APP ? require(USER_APP).default : props => props.render()

export default Component => props =>
  <App
    render={appProps => (
      <Component
        {...props}
        {...appProps}
      />
    )}
  />

