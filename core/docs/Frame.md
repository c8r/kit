# Frame

Renders children in an `<iframe>` – useful for testing responsive layouts and ensuring isolation from the parent document.

```jsx
import React from 'react'
import { Frame } from '@compositor/kit'
import Header from '../src/Header'

export default props => (
  <Frame width={320} height={480}>
    <Header>
      Hello Header
    </Header>
  </Frame>
)
```

## Props

name | type | description
---|---|---
`width` | number or string | width of the `<iframe>` (default 100%)
`height` | number or string | height of the `<iframe>` (default 100%)
`zoom` | number | CSS zoom (default 1)
`css` | string | CSS for the `<iframe>` document

## Related

- [Responsive](./Responsive.md)
