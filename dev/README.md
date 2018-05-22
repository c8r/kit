
# Kit dev server

Isolated development server for React components

- Zero configuration
- Hot reloading
- No entry point or HTML required
- Isolated from your main application
- Renders components and elements
- Supports MDX & JSX formats

```sh
npm i -g @compositor/kit-cli
```

Start the dev server by passing a directory of components as the first argument.

```sh
kit components/
```

Alternatively a single component file can be passed in.

```sh
kit components/Examples.js
```

## Options

```
-o --open     Opens development server in default browser
-p --port     Port for development server
-c --config   Path to configuration file
-m --mode     Enable alternative server UI modes
--webpack     Path to custom webpack.config.js
```

To see available options, run:

```sh
kit --help
```

All command line options can be set in your `package.json` file with a `kit` field.

```json
{
  "kit": {
    "port": 9000,
    "open": true
  }
}
```

## Configuration

A configuration file can be used to add components to scope, add themes, and add a custom Provider component to wrap the rendered components.
By default, Kit will look for a file named `kit.config.js`.
A custom configuration file can be passed with the `--config` flag.

Note: the configuration file should use node modules syntax and be in a *universal* JavaScript format for both server and client-side consumption.

```js
// example kit.config.js
import Rebass from 'rebass'

const theme = {
  colors: {
    black: '#000c14',
    blue: '#07c',
    green: '#0c7'
  }
}


export default {
  components: Rebass,
  theme
}
```

### Custom Provider Component

The Provider component wraps each rendered component passed to the dev server.
The default [Provider](lib/Provider.js) component set typographic styles based on the theme and adds a [styled-components][sc] [ThemeProvider][theme-provider].
To use a custom Provider component, add a `Provider` to your configuration.

```js
// example kit.config.js
import React from 'react'
import { ThemeProvider } from 'glamorous'
import theme from '../src/theme'

const Provider = props => <ThemeProvider {...props} />

export default {
  theme,
  Provider
}
```

## Modes

By default, the Kit dev server renders each component in isolation with minimal base styling for the document.
Use the `--mode` flag to enable alternative modes for the development UI.

### Library Mode

Renders components using the [Kit Library component][Library] component, which displays all components together in a grid and in isolation when clicked.

```sh
kit examples --mode library
```

[Library]: ../core/docs/Library.md

## File Types

**Experimental**

The Kit dev server includes experimental support for special [`.mdx`][mdx] and `.jsx` file types.
Both formats use front matter to set default props for the rendered component.

To provide components in scope for these formats, use the `components` option in a `kit.config.js` file

**Example .mdx file**
```md
---
title: Hello
---

# Markdown syntax works

<Box p={3} color='tomato'>
  <Heading fontSize={5}>
    {props.title}
  </Heading>
  <Text>
    Inline JSX syntax works as well
  </Text>
</Box>
```

**Example .jsx file**
```jsx
---
title: Hello
---
<Box p={3} color='tomato'>
  <Heading fontSize={5}>
    {props.title}
  </Heading>
</Box>
```

---

[Made by Compositor](https://compositor.io/)
|
[MIT License](LICENSE.md)

[mdx]: https://github.com/mdx-js/mdx
[sc]: https://github.com/styled-components/styled-components
[theme-provider]: https://www.styled-components.com/docs/advanced#theming
