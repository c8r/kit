import React from 'react'

const App = USER_APP
  ? require(USER_APP).default || require(USER_APP)
  : props => props.render()

export default Component => props =>
  <App
    render={appProps => (
      <Component
        {...props}
        {...appProps}
      />
    )}
  />

