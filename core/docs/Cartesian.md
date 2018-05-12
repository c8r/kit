
# Cartesian

Display the cartesian product of component props

![](images/cartesian.png)

```jsx
import React from 'react'
import { Cartesian } from '@compositor/kit'
import Button from '../src/Button'

export default props => (
  <Cartesian
    component={Button}
    m={4}
    fontSize={[1, 2, 3]}
    bg={['blue', 'pink', 'tomato', 'purple']}
    children={['Hello, world!', 'Beep']}
  />
)
```
