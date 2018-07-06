# Debug

The Debug component can be used to get a formatted JSON printout of an object.
It also provides a HOC for logging props when a component uses the implicit return.

```.jsx
<Debug>{{ some: 'object', to: 'debug' }}</Debug>
```

## Usage

The Debug component takes an object as a `children` prop.
This can be used to inspect data, props, or any object you might have in state.

```jsx
import React from 'react'
import { Debug } from '@compositor/kit'

export default () =>
  <Debug children={{ an: 'object' }} />
```

## Props

Name | Type | Required | Description
---|---|---|---
`log` | Boolean | `false` | Log object to the console

### withDebug

Sometimes it can be a pain to inspect the props of a component using an explicit return during development.
withDebug is a HOC to log props to the console for inspection.

```jsx
import React from 'react'
import { withDebug } from '@compositor/kit'

export default withDebug(props =>
  <MyComponent {...props} />
)
```

## Prop

Name | Type | Required | Description
---|---|---|---
`Component` | Function | `true` | The component whose props you'd like to log
