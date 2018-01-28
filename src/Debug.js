import React from 'react'

import Box from './Box'

export default ({ children }) =>
  <Box w={1}>
    <h3>Debug</h3>

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
