# Styleguide

`Styleguide` is the top level component you will most likely interact with.
It handles route creation using `react-router` and renders all pages.
There is a dependency on the `metadata` function which preprocesses the components and their documentation.
The output data is set via [`getInitialProps`](https://github.com/c8r/x0#fetching-data) on the initial server render.

## Usage

```jsx
import React from 'react'
import {
  metadata,
  Styleguide
} from '@compositor/styleguide'

import * as Components from '../library'

const Example = props =>
  <Styleguide
    Components={{
      a: Components.Link,
      p: Components.Text,
      h1: Components.Title,
      h2: Components.Heading,
      h3: Components.Subhead,
      theme: Components.theme
    }}
    scope={Components}
    {...props}
  />

Example.getInitialProps = async props => ({
  styleguide: await metadata(props),
  ...props
})

export default Example
```

## Related

- `react-router`
- `@compositor/markdown`
- `@compositor/x0`
- [`metadata`](../api/metadata)
