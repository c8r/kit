import React from 'react'

export default ({ children }) => children.DEBUG
  ? (
    <pre
      style={{
        width: '100%',
        maxHeight: '400px',
        backgroundColor: '#fafafa',
        padding: '20px',
        overflow: 'auto'
      }}
      children={JSON.stringify(children, null, 2)}
    />
  )
  : null
