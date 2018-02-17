import React from 'react'
import {
  Provider,
  Library,
  Example,
} from '../src'

const Demo = props => (
  <Provider>
    <Library>
      <Library.Nav />
      <Example name='h1'>
        <h1>hello</h1>
      </Example>
      <Example name='button'>
        <button>hello</button>
      </Example>
    </Library>
  </Provider>
)

export default Demo
