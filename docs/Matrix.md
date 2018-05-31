
# Matrix

Displays a matrix of component permutations

![](images/matrix.png)

```jsx
import React from 'react'
import { Matrix } from '@compositor/kit'
import Button from '../src/Button'

export default props => (
  <Matrix
    component={Button}
    x={[
      { children: 'Hello' },
      { children: 'Hello', primary: true },
      { children: 'Hello', secondary: true },
      { children: 'Hello', error: true },
    ]}
    y={[
      {  size: 'small' },
      {  size: 'medium' },
      {  size: 'large' },
    ]}
  />
)
```

## Props

name | type | description
---|---|---
`component` | React component | the component to render
`x` | array | an array of props objects to display on the x-axis
`y` | array | an array of props objects to display on the y-axis
`width` | number | width of each column
