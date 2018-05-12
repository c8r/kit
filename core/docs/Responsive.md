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

```jsx
// using custom viewports
const example = (
  <Responsive
    viewports={[
      { width: 320, height: 480 },
      { width: 768, height: 1024 },
      { width: 1024, height: 768 }
    ]}>
    <PageHeader />
  </Responsive>
)
```
