# Font

Set font-family and other typographic styles.

The `Font` components provides basic webfont utilities to wrap your app.
It also provides a convenient webfont loader using [Google Fonts](https://fonts.google.com/).

## Usage

```jsx
import React from 'react'
import { Font } from '@compositor/kit'

export default props =>
  <Font
    fontFamily='"Lato, sans-serif"'
    {...props}
  />
```

### Props

Name | Default | Description
---- | ------- | -----------
`fontFamily` | `'system-ui, sans-serif'` | Font stack
`lineHeight` | `1.5` | Default line height
`color` | `#000` | Default color

## Related

- [@compositor/webfont](https://npmjs.com/package/@compositor/webfont)
