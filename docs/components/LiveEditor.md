# Live Editor

A `LiveEditor` is exposed whenever a code block is declared with the language `.jsx`.
It has a scope with all declared components passed into the styleguide.

## Usage

The `LiveEditor` accepts `code`, `scope`, and `theme` props.

```jsx
import { LiveEditor } from '@compositor/styleguide'

const Heading = ({ children }) => <h1>{children}</h1>

export default () =>
  <LiveEditor
    scope={{ Heading }}
    code='<Heading>Hello, world!</Heading>'
  />
```

### Details

```!jsx
<Docgen />
```

## Related

- [`react-live`](https://github.com/FormidableLabs/react-live)
