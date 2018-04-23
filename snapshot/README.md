
# Kit Snapshot

Jest snapshot testing utility for React component library examples

```sh
npm i -D @compositor/kit-snapshot
```

## Usage

To promote reuse of component examples for development, documentation, testing, etc. creating an `examples/` folder of components can reduce boilerplate in a component libraries.

Create an `examples/` folder and add component usage examples.

```jsx
// examples/Button.js
import React from 'react'
import Button from '../src/Button'

export default (
  <Button>Beep</Button>
)
```

```js
// examples/index.js
export { default as Button } from './Button'
```

Then in a test file, import the examples and pass them to the Kit snapshot utility.

```js
import snapshotExamples from '@compositor/kit-snapshot'
import * as examples from '../examples'

snapshotExamples(examples)
```

MIT License
