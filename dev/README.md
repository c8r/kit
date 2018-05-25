
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
kit examples
```

## Options

```
-o --open     Opens development server in default browser
-p --port     Port for development server
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

### MDX

**Example .mdx file**
```md
import { Box, Heading, Text } from './_scope'

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

### JSX

The JSX format uses front matter to set default props for the rendered component.
To provide components in scope, use the `scope` option in front-matter and include a JavaScript import statment.

**Example .jsx file**
```jsx
---
title: Hello
scope: import scope from './_scope'
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
[jsx]: https://github.com/c8r/jsx-loader
[sc]: https://github.com/styled-components/styled-components
[theme-provider]: https://www.styled-components.com/docs/advanced#theming
