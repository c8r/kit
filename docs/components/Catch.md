# Catch

React `componentDidCatch` component that displays errors.
Wrap it around other components that might error like a LiveEditor or a fetch.

```jsx
import React from 'react'
import { Catch } from '@compositor/kit'
import Button from '../src/Button'

export default props => (
  <Catch>
    <Button>Hello</Button>
  </Catch>
)
```

### Example

Here a ReferenceError is being caught.

```.jsx
<Catch>{imNotDefined}</Catch>
```
