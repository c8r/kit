# Kit

Components for development environments, style guides, and demos

```sh
npm i @compositor/kit
```

```jsx
import React from 'react'
import {
  Provider,
  Library,
  Example
} from '@compositor/kit'
import {
  Heading,
  Text,
  Button
} from './src'

const App = props => (
  <Provider>
    <Library>
      <Example name='Heading'>
        <Heading>Hello</Heading>
      </Example>
      <Example name='Text'>
        <Text>Hello</Text>
      </Example>
      <Example name='Button'>
        <Button>Hello</Button>
      </Example>
    </Library>
  </Provider>
)

export default App
```

Kit was intended for use with [x0][x0],
a zero-config development server and static site generator,
but any React application setup will work as well since Kit is simply a collection of React components.

```sh
x0 dev App.js
```

## Features

- React components for development
- Works great for demos and style guides
- No configuration
- No custom plugins or APIs

## Components

- [Provider](#provider)
- [Library](#library)
- [Example](#example)
- [XRay](#xray)
- [Responsive](#responsive)
- [Knobs](#knobs)
- [Frame](#frame)
- [LiveEditor](#liveeditor)
- [Debug](#debug)

### Provider

Wrap all Kit components with the Provider component to enable the Library navigation and other features.

Prop | Type | Description
---|---|---
css | string | root CSS styles
fontFamily | string | default font stack, adds a link tag for Google Fonts
lineHeight | string or number | default line-height
color | string | default color
scope | object | components provided to [`LiveEditor`](#liveeditor) scope
theme | object | theme object passed to `ThemeProvider` in [`LiveEditor`](#liveeditor)

### Library

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

### Example

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

### XRay

Displays a grid and adds outlines to children

```jsx
import React from 'react'
import { XRay } from '@compositor/kit'
import PageHeader from '../src/PageHeader'

const example = (
  <XRay>
    <PageHeader />
  </XRay>
)
```

Prop | Type | Description
---|---|---
color | string | base color for grid and outlines
backgroundColor | string | background-color
outline | boolean | shows outlines around all child elements
grid | boolean or number | pixel size for grid background, `false` will disable the grid (default `8`)

### Responsive

Displays children in `<iframe>`s, using the Frame component, at multiple viewport sizes.

```jsx
import React from 'react'
import { Responsive } from '@compositor/kit'
import PageHeader from '../src/PageHeader'

const example = (
  <Responsive>
    <PageHeader />
  </Responsive>
)
```

Prop | Type | Description
---|---|---
viewports | array | Array of `width` and `height` objects for each viewport size
zoom | number | Zoom level for the Frame component

### Knobs

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

### Frame

Renders children in an `<iframe>` – useful for testing responsive layouts and ensuring isolation from the parent document.

### LiveEditor

Renders code in [react-live][react-live] components with a live code editor.

### Debug

Renders children with `JSON.stringify` for debugging purposes

```jsx
import React from 'react'
import { Debug } from '@compositor/kit'
import someObject from '../src/someObject'

const example = (
  <Debug>{someObject}</Debug>
)
```

<!--
### `<Playground />`
### `<Examples />`
### `<Viewports />`
### `<PropsTable />`
### `<ColorPalette />`
### `<Colorable />`
### `<StyledSystem />`
### `<Spacing />`
### `<Typography />`
-->



## Related

- @compositor/x0
- @compositor/markdown
- @compositor/gen
- react-live
- react-docgen
- styled-system
- styled-parser

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

---

[Made by Compositor](https://compositor.io/)
|
[MIT License](license)

[x0]: https://github.com/c8r/x0
[react-live]: https://github.com/FormidableLabs/react-live
