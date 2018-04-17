# Responsive

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
