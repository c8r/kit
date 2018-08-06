# LiveEditor

The LiveEditor component is a wrapper around [react-live][react-live], with basic UI and a [ThemeProvider][theme-provider].

```jsx
import React from 'react'
import { LiveEditor } from '@compositor/kit'
import { Button, theme } from '../src'

export default () => (
  <LiveEditor
    code='<Button>Hello</Button>'
    scope={{
      Button
    }}
    theme={theme}
  />
)
```

### Props

Prop | Type | Description
---|---|---
code | string (required) | JSX code for the example
scope | object | Object of components to include in scope
theme | object | Theme object passed to the ThemeProvider

### Demo

Here's a LiveEditor inside a LiveEditor inside a LiveEditor.

```.jsx
<LiveEditor
  code='<LiveEditor code="<h1>Hello, world!</h1>" />'
  scope={{ LiveEditor }}
/>
```

[react-live]: https://github.com/FormidableLabs/react-live
[theme-provider]: https://www.styled-components.com/docs/advanced#theming
