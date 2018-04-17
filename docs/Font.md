# Font

`Font` provides basic webfont utilities to wrap your app.
It also provides a convenient webfont loader using [Google Fonts](https://fonts.google.com/).

## Usage

```jsx
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

- @compositor/webfont

## TODO

Move @compositor/webfont to Kit monorepo, move build deps to devDeps.
