import React from 'react'
import * as Rebass from 'rebass'
import { Markdown } from '../src'

const md = `
# Hello

- This...
- is a list
- with list items

\`\`\`jsx
console.log('hi')
\`\`\`

\`\`\`.jsx
<h1>Hello, world!</h1>
\`\`\`
`

export default () => (
  <div>
    <Markdown
      scope={Rebass}
      src={md}
    />
  </div>
)
