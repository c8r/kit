# Library

The Library component manages a list of examples created with the Example component,
showing a grid view by default and a detailed view when a component is clicked.

Prop | Type | Description
---|---|---
height | string | CSS height of the whole Library component (default `100vh`)
card | object | Object of `width`, `height`, and `gap` for the grid view cards

The Library component includes a Library.Nav component that will appear as a sidebar navigation
when passed as a child.

```jsx
import React from 'react'
import { Provider, Library } from '@compositor/kit'

const App = props => (
  <Provider>
    <Library>
      <Library.Nav />
    </Library>
  </Provider>
)
```

_Note_: that you must also use `Library.Nav` to render the navigation.

## Provider

Wrap all Kit components with the Provider component to enable the Library navigation and other features.

Prop | Type | Description
---|---|---
css | string | root CSS styles
fontFamily | string | default font stack, adds a link tag for Google Fonts
lineHeight | string or number | default line-height
color | string | default color
scope | object | components provided to [`LiveEditor`](#liveeditor) scope
theme | object | theme object passed to `ThemeProvider` in [`LiveEditor`](#liveeditor)

## Example

Use the Example component with the Library component to add examples.
Each Example component requires a unique `name` prop value.

```jsx
import React from 'react'
import { Provider, Library, Example } from '@compositor/kit'
import Button from '../src/Button'

const App = props => (
  <Provider>
    <Library>
      <Example name='Button'>
        <Button>
          Hello
        </Button>
      </Example>
    </Library>
  </Provider>
)
```

Prop | Type | Description
---|---|---
name | string (required) | Unique identifier that will be used for navigation in the Library
