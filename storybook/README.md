
```js
// storybook config
import { configure } from '@storybook/react'
import { loadExamples } from '@compositor/kit-storybook'

const req = require.context('../examples', false, /\.js$/)
const examples = req.keys().forEach(req)

configure(() => {
  loadExamples(examples)
}, module)
```

**CLI**
```sh
kit storybook examples
```
