# Library

The Library component manages a list of examples created with the Example component,
showing a grid view by default and a detailed view when a component is clicked.

## Usage

```.jsx
<Library basename="/components/Library">
  <Example name='Button'>
    <Button>Beep</Button>
  </Example>
  <Example name='Donut'>
    <Donut />
  </Example>
  <Example name='Badge'>
    <Badge bg='tomato'>Boop</Badge>
  </Example>
  <Example name='Heading'>
    <Heading>Hello</Heading>
  </Example>
</Library>
```

### Examples array

An array of examples can also be passed as a prop.
Each example object should have a `name` and `element` field for rendering the example.
This can be useful for keeping component examples decoupled from the Kit API
and for the ability to reuse the examples for things like snapshot testing.

```jsx
// examples.js
import React from 'react'
import {
  Button,
  Heading
} from '../src'

const examples = [
  {
    name: 'Button',
    element: (
      <Button>Beep</Button>
    )
  },
  {
    name: 'Heading',
    element: (
      <Heading>Hello</Heading>
    )
  },
]

export default examples
```

```jsx
import React from 'react'
import { Library } from '@compositor/kit'
import examples from './examples'

const App = props => (
  <Library
    title='My Component Library'
    examples={examples}
  />
)
```

```jsx
// example snapshot test file
import TestRenderer from 'react-test-renderer'
import examples from '../examples'

const renderJSON = el => TestRenderer.create(el).toJSON()

examples.forEach(example => {
  test(`${example.name} renders`, () => {
    const json = renderJSON(example.element)
    expect(json).toMatchSnapshot()
  })
})
```

### Customizing the Library styles

The Library component's side navigation and cards can be customized using [render props][render-props].

To customize the side navigation, use the `renderSideNav` prop, which receives props for the `title` and an `examples` array.

```jsx
// custom side nav example
import React from 'react'
import { Library } from '@compositor/kit'
import { NavLink } from 'react-router-dom'
import examples from '../examples'

export default props =>
  <Library
    title='My Library'
    examples={examples}
    renderSideNav={({
      title,
      examples,
    }) => (
      <div>
        <h1>{title}</h1>
        <ul>
          {examples.map(example => (
            <li key={example.name}>
              <NavLink to={'/' + example.name}>
                {example.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    )}
  />
```

To customize the card rendered in the Library grid view, use the `renderCard` prop.

```jsx
import React from 'react'
import { Library } from '@compositor/kit'
import examples from '../examples'

export default props =>
  <Library
    title='My Library'
    examples={examples}
    renderCard={({ example, Card, Link }) => (
      <Link
        key={example.name}
        to={'/' + example.name}>
        {example.element}
      </Link>
    )}
  />
```

### Library Component Props

Prop | Type | Description
---|---|---
examples | array | Optional prop to pass examples in as an array of example objects instead of using children
title | string | Optional title to display in the side nav
renderSideNav | function | Optional render prop to customize side nav
renderCard | function | Optional render prop to customize card in the grid view

### Example Component

Use the Example component with the Library component to add examples.
Each Example component requires a unique `name` prop value.

#### Usage

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

#### Example Component Props

Prop | Type | Description
---|---|---
name | string (required) | Unique identifier that will be used for navigation in the Library

### Detail Component

Use the Detail component to add additional elements when viewing the example detail view. Elements in the Detail component will not show up in the grid view of the Library.

#### Usage

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

[render-props]: https://reactjs.org/docs/render-props.html
