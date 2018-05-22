import React from 'react'
import { Library, Example, Detail } from '../src'

const examples = [
  {
    name: 'Button',
    element: <button>Beep</button>
  },
  {
    name: 'Heading',
    element: <h1>Hello</h1>
  }
]

export default class extends React.Component {
  render() {
    return <Library title="Example Library" examples={examples} />
  }
}
