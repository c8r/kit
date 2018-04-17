import React, { Fragment } from 'react'

export const Debug = ({ children, log }) => {
  if (log) {
    console.log(children)
  }

  return (
    <pre
      style={{
        maxHeight: '400px',
        backgroundColor: '#fafafa',
        padding: '20px',
        overflowX: 'scroll',
        whiteSpace: 'pre-wrap'
      }}
      children={JSON.stringify(children, null, 2)}
    />
  )
}

export const withDebug = Component => props => {
  console.log(props)

  return <Component {...props} />
}
