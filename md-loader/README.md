
# @compositor/md-loader

Webpack loader for @compositor/md

```sh
npm i @compositor/md-loader
```

```js
// webpack.config.js
{
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          'babel-loader',
          '@compositor/md-loader'
        ]
      }
    ]
  }
}
```

```js
import React from 'react'
import Hello from './hello.md'

export default () => (
  <Hello />
)
```
