import React from 'react'
import { Button } from 'rebass'
import { Cartesian } from '../src'

export default props => (
  <Cartesian
    m={4}
    fontSize={[1, 2, 3]}
    bg={['blue', 'pink', 'tomato', 'purple']}
    children={['Hello, world!', 'Beep']}
    component={Button}
  />
)
