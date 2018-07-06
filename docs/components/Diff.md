
# Diff

Shows a visual diff between two elements

![](images/diff.png)

```jsx
import React from 'react'
import { Diff } from '@compositor/kit'
import Button from '../src/Button'

export default props => (
  <Diff>
    <Button>Hello</Button>
    <Button pill>Hello</Button>
  </Diff>
)
```

