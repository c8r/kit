# PropsForm

Add form controls to adjust a component's props.

Renders the first child element with optional form elements to adjust prop values in browser.
Default values are extracted from the first child's props

```jsx
import React from 'react'
import { PropsForm } from '@compositor/kit'
import Button from '../src/Button'

const example = (
  <PropsForm>
    <Button color='blue'>Hello</Button>
    <PropsForm.Input name='color' />
    <PropsForm.Select name='size'>
      <option>small</option>
      <option>medium</option>
      <option>large</option>
    </PropsForm.Select>
  </PropsForm>
)
```
