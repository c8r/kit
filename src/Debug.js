import React from 'react'

export default ({ children, log }) => {
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
