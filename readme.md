# Kit

Components for development environments, style guides, and demos.

```sh
npm i -S @compositor/kit
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

- [Library](docs/Library.md)
  * [Provider](docs/Library.md#provider)
  * [Example](docs/Library.md#example)
- [XRay](docs/XRay.md)
- [Responsive](docs/Responsive.md)
- [Knobs](docs/Knob.md)
- [Frame](docs/Frame.md)
- [LiveEditor](docs/LiveEditor.md)
- [Debug](docs/Debug.md)

## Related

- @compositor/x0
- @mdx-js/mdx
- @compositor/gen
- react-live
- styled-system

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
