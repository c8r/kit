# State

The `State` component uses the [render prop][rp] pattern to expose React state to child elements.
Use the `State` component to quickly test interactions in UI components.

Pass props to initialize state and use the `update` prop to update the state.

```jsx
import React from 'react'
import { State } from '@compositor/kit'
import Counter from '../src/Counter'

const example = (
  <State
    count={0}
    render={({
      update,
      count
    }) => (
      <Counter
        value={count}
        onDecrement={e => update(state => ({ count: state.count - 1 }))}
        onIncrement={e => update(state => ({ count: state.count + 1 }))}
      />
    )}
  />
)
```

[rp]: https://reactjs.org/docs/render-props.html
