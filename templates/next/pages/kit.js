import React from 'react'
import { Button } from 'standard-components'
import { Library, Example, Cartesian } from '@compositor/kit'

export default () =>
  <Library basename="/kit">
    <Example name="Button">
      <Button>Hello, world!</Button>
    </Example>
  </Library>
