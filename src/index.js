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
  console.log(dir)
  dir = 'docs/components'
  console.log(opts)
  const scope = require(opts.library)
  console.log(scope)
  const metadata = await processMetadata(dir, scope, opts)
  console.log(metadata)

  const data = await getData(dir, opts)
  console.log(data)
  const pages = await render(data, opts)
  const result = await writePages(pages, opts)
  console.log('bunnnng')
  console.log(result)
  return result
}
