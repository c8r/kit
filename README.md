# Kit

Tools for developing, documenting, and testing React component libraries

## Features

- Utility components for isolated development
- Project scaffolding generator
- Isolated development server
- Component library viewer


## Getting started

### CLI

```sh
npm install --global @compositor/kit-cli
```

### Components

```sh
npm install --save @compositor/kit
```

<!--
### Components

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

For more on using Kit components see the docs:

- [Library](docs/Library.md)
- [LiveEditor](docs/LiveEditor.md)
- [XRay](docs/XRay.md)
- [Responsive](docs/Responsive.md)
- [Debug](docs/Debug.md)

### Development Server

Kit includes a command line interface and development server.
Install the CLI either as a global or local dependency in your project.

```sh
npm i -g @compositor/kit-cli
```

Run the dev server pointing to a directory of components or a single component file.

```sh
kit examples/App.js
```

Alternatively, add a run script to your `package.json` file.

```json
"scripts": {
  "start": "kit examples/App.js"
}
```

### Generator

Kit CLI also includes a generator for quickly creating demos, style guides,
and other setups with no build configuration required.

Run the `init` command to get started.

```sh
kit init
```

## Related

- [@compositor/x0][x0]
- [@mdx-js/mdx][mdx]
- [react-live][react-live]
- [styled-system][styled-system]

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
-->

---

[Made by Compositor](https://compositor.io/)
|
[MIT License](license)

[x0]: https://github.com/c8r/x0
[mdx]: https://github.com/mdx-js/mdx
[react-live]: https://github.com/FormidableLabs/react-live
[styled-system]: https://github.com/jxnblk/styled-system
