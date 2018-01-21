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

import {
  getData,
  render,
  writePages
} from '@compositor/gen/lib'

import processMetadata from './process-metadata'

export default async (dir, opts = {}) => {
  dir = 'docs/components'
  const scope = require(opts.library)
  opts.components = scope
  const metadata = await processMetadata(dir, scope, opts)

  const data = await getData(dir, opts)
  const pages = await render(data, opts)
  const result = await writePages(pages, opts)

  return result
}
