# Knobs

Add form controls to adjust a component's props.

Renders the first child element with optional form elements to adjust prop values in browser.
Default values are extracted from the first child's props

```jsx
import React from 'react'
import { Knobs } from '@compositor/kit'
import Button from '../src/Button'

const example = (
  <Knobs>
    <Button color='blue'>Hello</Button>
    <Knobs.Input name='color' />
    <Knobs.Select name='size'>
      <option>small</option>
      <option>medium</option>
      <option>large</option>
    </Knobs.Select>
  </Knobs>
)
```
