
# Diff

Shows a visual diff between two elements

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

**NOTE: THIS DOES NOT REFLECT THE CURRENT API**
