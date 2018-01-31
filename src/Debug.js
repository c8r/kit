import React from 'react'

import Box from './Box'

export default ({ children, log }) => {
  if (log) {
    console.log(children)
  }

  return (
    <Box w={1}>
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
    </Box>
  )
}
