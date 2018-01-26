require('babel-register')({
  presets: [
    [ require.resolve('babel-preset-env'), {
      targets: {
        node: '8'
      }
    }],
    require.resolve('babel-preset-stage-0'),
    require.resolve('babel-preset-react')
  ]
})

import path from 'path'

import getMetadata from './get-metadata'

export default async ({
  dir = 'docs',
  library = 'src',
  ...opts
}) => {
  const scope = require(library)
  const theme = require(path.join(library, 'theme.json'))
  const metadata = getMetadata({ ...opts, dir, library })

  return {
    scope,
    theme,
    metadata
  }
}
