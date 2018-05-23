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
<Box>
  <Heading>Hello</Heading>
</Box>
\`\`\`
`

export default () => (
  <div>
    <Markdown
      scope={{ ...Rebass }}
      src={md}
    />
  </div>
)
