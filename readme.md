# Styleguide

Generate a styleguide for React components, including those built with [Lab](https://compositor.io/lab).
Uses a nifty superset of [Markdown](https://github.com/c8r/markdown) which allows you to render components and even a live editor playground.

## Why?

Communication and information architecture are the most important aspects of documenting a design system and living styleguide.
This library seeks to handle the boring implementation details, allowing you to work on building your components and writing your documentation.

Styleguide was originally created to document projects built using Compositor products.
We then realized that this could be useful for any project, so we open sourced it for all to enjoy and use.

## Installation

```bash
npm install -g @compositor/styleguide
```

## Usage

```sh
styleguide .
```

### Options

NOT YET IMPLEMENTED

| Name | Default | Description |
| ---- | ------- | ----------- |
| `library` | `library` | Directory location of components |
| `docs` | `docs` | Directory location of markdown files |
| `logo` | `undefined` | Url for the logo to be shown in the nav |
| `out-dir` | `dist` | Where the static build is output |

### Components as Configuration

```jsx
import React from 'react'
import { Styleguide } from '@compositor/styleguide'

import Components from './components'

export default () =>
  <Styleguide
    Components={Components}
    other='config'
  />
```

The `Styleguide` component handles routing, rendering markdown, and other features like the playground.
This is where you pass in your components and other aspects you'd like to configure.
Though, we've tried to come up with the most sensible defaults possible.

It interacts with the filesystem to set the initial, global properties for the styleguide, but it only does this work on the initial build, and is a noop when on the client.

### Documentation Components

Styleguide provides a collection of components that you can use in your documentation.
This can be achieved by using JSX rendering/playground syntax in your markdown.
If desired, you can also export documentation as React components themselves.

#### `<Playground />`

#### `<XRay />`

#### `<Examples />`

#### `<Viewports />`

#### `<PropsTable />`

#### `<ColorPalette />`

#### `<Colorable />`

#### `<StyledSystem />`

#### `<Spacing />`

#### `<Typography />`

#### `<Debug />`

### Layout Components

You can customize the layout and design of the styleguide by overriding the default components with your own.

#### `<Content />`

#### `<Nav />`

#### `<Logo />`

#### `<Footer />`

## Related

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
