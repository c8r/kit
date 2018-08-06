# XRay

Displays a grid and adds outlines to children.

### Demo

```.jsx
<XRay>
  <Box p={3}>
    <Heading my={4}>Hello, world!</Heading>
  </Box>
</XRay>
```

### Full example

```jsx
import React from 'react'
import { XRay } from '@compositor/kit'
import PageHeader from '../src/PageHeader'

const example = (
  <XRay>
    <PageHeader />
  </XRay>
)
```

## Props

Prop | Type | Description
---|---|---
color | string | base color for grid and outlines
backgroundColor | string | background-color
outline | boolean | shows outlines around all child elements
grid | boolean or number | pixel size for grid background, `false` will disable the grid (default `8`)
