import React from 'react'
import styled from 'styled-components'
import { color, space, fontSize } from 'styled-system'
import {
  Library,
  Example,
  Detail
} from '../src'

const examples = [
  {
    name: 'Button',
    element: (
      <button>Beep</button>
    )
  },
  {
    name: 'Heading',
    element: (
      <h1>Hello</h1>
    )
  },
]

export default class extends React.Component {
  render () {
    return (
      <div>
        <Library
          title='Example Library'
          examples={examples}
        />
      </div>
    )
  }
}
