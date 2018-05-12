# Style

__This should never be used with user created content__

Embed styles to an app with a clean API.

## Usage

```jsx
import { Style } from '@compositor/kit'

const css = `* { box-sizing: border-box }`

export default () => <Style>{css}</Style>
```
