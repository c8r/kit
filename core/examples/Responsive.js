import React from 'react'
import { Responsive } from '../src'

export default props => (
  <Responsive zoom={0.75}>
    <div
      style={{
        padding: 16,
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'tomato'
      }}
    >
      Hello
    </div>
  </Responsive>
)
