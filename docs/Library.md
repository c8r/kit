# Library

The Library component manages a list of examples created with the Example component,
showing a grid view by default and a detailed view when a component is clicked.

Prop | Type | Description
---|---|---
examples | array | Optional prop to pass examples in as an array of example objects instead of using children
renderSideNav | function | render prop to customize side nav


```jsx
import React from 'react'
import { Library, Example } from '@compositor/kit'
import { Button } from '../src'

const App = props => (
  <Library>
    <Example name='Button'>
      <Button>Beep</Button>
    </Example>
  </Library>
)
```

## Example

Use the Example component with the Library component to add examples.
Each Example component requires a unique `name` prop value.

```jsx
import React from 'react'
import { Library, Example } from '@compositor/kit'
import Button from '../src/Button'

const App = props => (
  <Library>
    <Example name='Button'>
      <Button>
        Hello
      </Button>
    </Example>
  </Library>
)
```

Prop | Type | Description
---|---|---
name | string (required) | Unique identifier that will be used for navigation in the Library

## Detail

Use the Detail component to add additional elements when viewing the example detail view. Elements in the Detail component will not show up in the grid view of the Library.

```jsx
import React from 'react'
import { Library, Example, Detail } from '@compositor/kit'

const App = props => (
  <Library>
    <Example name='Button'>
      <Button>Beep</Button>
      <Detail>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button large>Large</Button>
        <Button small>Small</Button>
      </Detail>
    </Example>
  </Library>
)
```
