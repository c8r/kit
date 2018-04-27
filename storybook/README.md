
# Kit Storybook

**Experimental**

Create a [Storybook][storybook] dev environment with a folder of examples 

```sh
npm i -g @compositor/kit-storybook
```

## Usage

Run Kit Storybook against a folder of examples.
Each example module should export a React element.

```sh
kit-storybook examples
```

```js
// examples/Button.js example module
import React from 'react'
import { Button } from '../src'

export default (
  <Button>
    Hello
  </Button>
)
```

## Core API

To use examples in an existing storybook, import the `loadExamples` function in your storybook config and pass an object of examples to render.

```js
// storybook config
import path from 'path'
import { configure } from '@storybook/react'
import loadExamples from '@compositor/kit-storybook'

const req = require.context('../examples', false, /\.js$/)

const examples = req.keys().forEach(key => ({
  name: path.basename(key, path.extname(key)),
  example: req(key).default || req(key)
})

configure(() => {
  loadExamples(examples)
}, module)
```

MIT License
