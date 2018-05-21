import React from 'react'

const Provider = props => (
  <React.Fragment>
    <link rel='stylesheet' href='https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css' />
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.5
      }}>
      {props.children}
    </div>
  </React.Fragment>
)

export default {
  Provider
}
