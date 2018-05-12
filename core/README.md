# Kit Components

Utility React components for development & documentation

https://github.com/c8r/kit

```sh
npm install @compositor/kit
```

Kit components can be used in any React application setup.

```jsx
// example
import React from 'react'
import { XRay } from '@compositor/kit'
import Button from '../src/Button'

export default props => (
  <XRay>
    <Button>Hello</Button>
  </XRay>
)
```

<!-- TODO
### Libary Component

Kit includes several React components for development and documentation.
The Library and Example components can be used to create a development environment separately from your application's code base.

```jsx
import React from 'react'
import {
  Library,
  Example
} from '@compositor/kit'
import {
  Heading,
  Text,
  Button
} from './src'

const App = props => (
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
)

export default App
```
-->

## Documentation

- [XRay](docs/XRay.md)
- [Debug](docs/Debug.md)
- [Library](docs/Library.md)
- [Responsive](docs/Responsive.md)
- [Frame](docs/Frame.md)
- [Cartesian](docs/Cartesian.md)
- [Matrix](docs/Matrix.md)
- [LiveEditor](docs/LiveEditor.md)
- [PropsForm](docs/PropsForm.md)
- [Markdown](docs/Markdown.md)
- [State](docs/State.md)
- [Diff](docs/Diff.md)
- [Font](docs/Font.md)
- [Style](docs/Style.md)
- [Catch](docs/Catch.md)

---

[Made by Compositor](https://compositor.io/)
|
[MIT License](license)
