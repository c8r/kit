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

Kit was intended for use with [x0][x0], but any React application setup will work as well.

```sh
x0 dev App.js
```

## Components

### Provider
### Library
### Example
### NavList

### `<Playground />`
### `<XRay />`
### `<Examples />`
### `<Viewports />`
### `<PropsTable />`
### `<ColorPalette />`
### `<Colorable />`
### `<StyledSystem />`
### `<Spacing />`
### `<Typography />`
### `<Debug />`



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
