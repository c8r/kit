
# @compositor/md

```sh
npm i @compositor/md
```

```js
import React from 'react'
import * as Rebass from 'rebass'
import { Markdown } from '@compositor/md'

const src = `
# Hello @compositor/md
`

export default () => (
  <Markdown
    src={src}
    scope={Rebass}
  />
)
```
