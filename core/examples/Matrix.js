import React from 'react'
import { Button } from 'rebass'
import { Matrix } from '../src'

export default props => (
  <Matrix
    component={Button}
    x={[
      { children: 'Hello', bg: 'red', m: 2 },
      { children: 'Beep', bg: 'green', m: 2 },
      { children: 'Boop', bg: 'blue', m: 2  },
    ]}
    y={[
      { px: 3, py: 2 },
      { px: 4, py: 3 },
      { px: 4, py: 3, fontSize: 3 },
    ]}
  />
)
